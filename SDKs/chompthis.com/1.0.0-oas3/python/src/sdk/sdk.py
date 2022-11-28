

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://chompthis.com/api/v2",
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
        
    
    
    
    def get_food_branded_barcode_php(self, request: operations.GetFoodBrandedBarcodePhpRequest) -> operations.GetFoodBrandedBarcodePhpResponse:
        r"""Get a branded food item using a barcode
        ## Get data for a branded food using the food's UPC/EAN barcode.
        
        **Example** 
        > ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```
        
        **Tips**
          * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/food/branded/barcode.php"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFoodBrandedBarcodePhpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BrandedFoodObject])
                res.branded_food_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_food_branded_name_php(self, request: operations.GetFoodBrandedNamePhpRequest) -> operations.GetFoodBrandedNamePhpResponse:
        r"""Get a branded food item by name
        ## Search for branded food items by name.
        
        **Example**
        > ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```
        
        **Tips**
          * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.
        
        > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/food/branded/name.php"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFoodBrandedNamePhpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BrandedFoodObject])
                res.branded_food_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_food_branded_search_php(self, request: operations.GetFoodBrandedSearchPhpRequest) -> operations.GetFoodBrandedSearchPhpResponse:
        r"""Get data for branded food items using various search parameters
        ## Search for branded food items using various parameters.
        
        **Example**
        > ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```
        
        **Tips** 
          * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.
        
        > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/food/branded/search.php"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFoodBrandedSearchPhpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BrandedFoodObject])
                res.branded_food_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_food_ingredient_search_php(self, request: operations.GetFoodIngredientSearchPhpRequest) -> operations.GetFoodIngredientSearchPhpResponse:
        r"""Get raw/generic food ingredient item(s)
        ## Get data for a specific ingredient or a specific set of ingredients.
        
        **Example #1: Single Ingredient**
        > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```
        
        **Example #2: Set of Ingredients**
        > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```
        
        **Tips**
          * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.
        
        > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/food/ingredient/search.php"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFoodIngredientSearchPhpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IngredientObject])
                res.ingredient_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    