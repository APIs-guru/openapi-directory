

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.ebay.com{basePath}",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_product(self, request: operations.GetProductRequest) -> operations.GetProductResponse:
        r"""This call retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in the request. These details include the product's title and description, aspects and their values, associated images, applicable category IDs, and any recognized identifiers that apply to the product. For a new listing, you can use the search call to identify candidate products on which to base the listing, then use the getProduct call to present the full details of those candidate products to the seller to make a a final selection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/product/{epid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def search(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""This call searches for and retrieves summaries of one or more products in the eBay catalog that match the search criteria provided by a seller. The seller can use the summaries to select the product in the eBay catalog that corresponds to the item that the seller wants to offer for sale. When a corresponding product is found and adopted by the seller, eBay will use the product information to populate the item listing. The criteria supported by search include keywords, product categories, and category aspects. To see the full details of a selected product, use the getProduct call. In addition to product summaries, this call can also be used to identify refinements, which help you to better pinpoint the product you're looking for. A refinement consists of one or more aspect values and a count of the number of times that each value has been used in previous eBay listings. An aspect is a property (e.g. color or size) of an eBay category, used by sellers to provide details about the items they're listing. The refinement container is returned when you include the fieldGroups query parameter in the request with a value of ASPECT_REFINEMENTS or FULL. Example A seller wants to find a product that is &quot;gray&quot; in color, but doesn't know what term the manufacturer uses for that color. It might be Silver, Brushed Nickel, Pewter, or even Grey. The returned refinement container identifies all aspects that have been used in past listings for products that match your search criteria, along with all of the values those aspects have taken, and the number of times each value was used. You can use this data to present the seller with a histogram of the values of each aspect. The seller can see which color values have been used in the past, and how frequently they have been used, and selects the most likely value or values for their product. You issue the search call again with those values in the aspect_filter parameter to narrow down the collection of products returned by the call. Although all query parameters are optional, this call must include at least the q parameter, or the category_ids, gtin, or mpn parameter with a valid value. If you provide more than one of these parameters, they will be combined with a logical AND to further refine the returned collection of matching products. Note: This call requires that certain special characters in the query parameters be percent-encoded: &nbsp;&nbsp;&nbsp;&nbsp;(space) = %20 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;, = %2C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: = %3A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ = %5B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] = %5D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ = %7B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = %7C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} = %7D This requirement applies to all query parameter values. However, for readability, call examples and samples in this documentation will not use the encoding. This call returns product summaries rather than the full details of the products. To retrieve the full details of a product, use the getProduct call with an ePID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/product_summary/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductSearchResponse])
                res.product_search_response = out
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    