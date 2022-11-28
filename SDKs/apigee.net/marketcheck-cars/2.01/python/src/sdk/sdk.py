

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://marketcheck-prod.apigee.net/v2",
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
        
    
    
    
    def get_car_dealer_inventory_active(self, request: operations.GetCarDealerInventoryActiveRequest) -> operations.GetCarDealerInventoryActiveResponse:
        r"""Get dealers active inventory
        Get dealers active inventory
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/car/dealer/inventory/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCarDealerInventoryActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealer_heavy_equipment_id_(self, request: operations.GetDealerHeavyEquipmentIDRequest) -> operations.GetDealerHeavyEquipmentIDResponse:
        r"""Dealer by id
        Get a particular dealer's information by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dealer/heavy-equipment/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerHeavyEquipmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dealer])
                res.dealer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealer_motorcycle_id_(self, request: operations.GetDealerMotorcycleIDRequest) -> operations.GetDealerMotorcycleIDResponse:
        r"""Dealer by id
        Get a particular dealer's information by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dealer/motorcycle/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerMotorcycleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dealer])
                res.dealer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealer_rv_id_(self, request: operations.GetDealerRvIDRequest) -> operations.GetDealerRvIDResponse:
        r"""Dealer by id
        Get a particular dealer's information by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dealer/rv/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerRvIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dealer])
                res.dealer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealers_heavy_equipment(self, request: operations.GetDealersHeavyEquipmentRequest) -> operations.GetDealersHeavyEquipmentResponse:
        r"""Find car dealers around
        The dealers API returns a list of dealers around a given point and radius.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dealers/heavy-equipment"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersHeavyEquipmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealersResponse])
                res.dealers_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealers_motorcycle(self, request: operations.GetDealersMotorcycleRequest) -> operations.GetDealersMotorcycleResponse:
        r"""Find car dealers around
        The dealers API returns a list of dealers around a given point and radius.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dealers/motorcycle"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersMotorcycleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealersResponse])
                res.dealers_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealers_rv(self, request: operations.GetDealersRvRequest) -> operations.GetDealersRvResponse:
        r"""Find car dealers around
        The dealers API returns a list of dealers around a given point and radius.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dealers/rv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersRvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealersResponse])
                res.dealers_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_auction_id_(self, request: operations.GetListingCarAuctionIDRequest) -> operations.GetListingCarAuctionIDResponse:
        r"""Listing by id
        Get a particular auction listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/auction/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarAuctionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_auction_id_extra(self, request: operations.GetListingCarAuctionIDExtraRequest) -> operations.GetListingCarAuctionIDExtraResponse:
        r"""Long text Listings attributes for Listing with the given id
        Get listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/auction/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarAuctionIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_auction_id_media(self, request: operations.GetListingCarAuctionIDMediaRequest) -> operations.GetListingCarAuctionIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/auction/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarAuctionIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_fsbo_id_(self, request: operations.GetListingCarFsboIDRequest) -> operations.GetListingCarFsboIDResponse:
        r"""Listing by id
        Get a particular private party listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/fsbo/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarFsboIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_fsbo_id_extra(self, request: operations.GetListingCarFsboIDExtraRequest) -> operations.GetListingCarFsboIDExtraResponse:
        r"""Long text Listings attributes for Listing with the given id
        Get listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/fsbo/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarFsboIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_fsbo_id_media(self, request: operations.GetListingCarFsboIDMediaRequest) -> operations.GetListingCarFsboIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/fsbo/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarFsboIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_id_extra(self, request: operations.GetListingCarIDExtraRequest) -> operations.GetListingCarIDExtraResponse:
        r"""Long text Listings attributes for Listing with the given id
        Get listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_id_media(self, request: operations.GetListingCarIDMediaRequest) -> operations.GetListingCarIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_heavy_equipment_id_(self, request: operations.GetListingHeavyEquipmentIDRequest) -> operations.GetListingHeavyEquipmentIDResponse:
        r"""Heavy equipment listing by id
        Get a particular Heavy equipment listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/heavy-equipment/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingHeavyEquipmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HeavyEquipmentsListing])
                res.heavy_equipments_listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_heavy_equipment_id_extra(self, request: operations.GetListingHeavyEquipmentIDExtraRequest) -> operations.GetListingHeavyEquipmentIDExtraResponse:
        r"""Long text Heavy equipment Listings attributes for Listing with the given id
        Get Heavy equipment listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/heavy-equipment/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingHeavyEquipmentIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_heavy_equipment_id_media(self, request: operations.GetListingHeavyEquipmentIDMediaRequest) -> operations.GetListingHeavyEquipmentIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/heavy-equipment/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingHeavyEquipmentIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_motorcycle_id_(self, request: operations.GetListingMotorcycleIDRequest) -> operations.GetListingMotorcycleIDResponse:
        r"""Motorcycle listing by id
        Get a particular Motorcycle listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/motorcycle/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingMotorcycleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MotorcycleListing])
                res.motorcycle_listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_motorcycle_id_extra(self, request: operations.GetListingMotorcycleIDExtraRequest) -> operations.GetListingMotorcycleIDExtraResponse:
        r"""Long text Motorcycle Listings attributes for Listing with the given id
        Get Motorcycle listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/motorcycle/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingMotorcycleIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_motorcycle_id_media(self, request: operations.GetListingMotorcycleIDMediaRequest) -> operations.GetListingMotorcycleIDMediaResponse:
        r"""Motorcycle listing media by id
        Get Motorcycle listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/motorcycle/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingMotorcycleIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_rv_id_(self, request: operations.GetListingRvIDRequest) -> operations.GetListingRvIDResponse:
        r"""RV listing by id
        Get a particular RV listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/rv/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingRvIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RvListing])
                res.rv_listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_rv_id_extra(self, request: operations.GetListingRvIDExtraRequest) -> operations.GetListingRvIDExtraResponse:
        r"""Long text RV Listings attributes for Listing with the given id
        Get RV listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/rv/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingRvIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_rv_id_media(self, request: operations.GetListingRvIDMediaRequest) -> operations.GetListingRvIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/rv/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingRvIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_car_auction_active(self, request: operations.GetSearchCarAuctionActiveRequest) -> operations.GetSearchCarAuctionActiveResponse:
        r"""Gets active auction car listings for the given search criteria
        This API produces a list of currently active auction cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search Cars around a given geo-point within a given radius 
        2. Search cars for a specific year / make / model or combination of these 
        3. Search cars matching multiple year, make, model combinatins in the same search request
        4. Filter results by most car specification attributes
        5. Search for similar cars by VIN or Taxonomy VIN 
        6. Filter cars within a given price / miles / days on market (dom) range
        7. Specify a sort order for the results on price / miles / dom / listed date 
        8. Search cars for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles/dom for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/auction/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchCarAuctionActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_car_fsbo_active(self, request: operations.GetSearchCarFsboActiveRequest) -> operations.GetSearchCarFsboActiveResponse:
        r"""Gets active private party car listings for the given search criteria
        This API produces a list of currently active FSBO cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search Cars around a given geo-point within a given radius 
        2. Search cars for a specific year / make / model or combination of these 
        3. Search cars matching multiple year, make, model combinatins in the same search request
        4. Filter results by most car specification attributes
        5. Search for similar cars by VIN or Taxonomy VIN 
        6. Filter cars within a given price / miles / days on market (dom) range
        7. Specify a sort order for the results on price / miles / dom / listed date 
        8. Search cars for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles/dom for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/fsbo/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchCarFsboActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_car_incentive_oem(self, request: operations.GetSearchCarIncentiveOemRequest) -> operations.GetSearchCarIncentiveOemResponse:
        r"""Gets oem incentive listings for the given search criteria
        This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
         The search API facilitates the following use cases - 
        1. Search Cars around a given geo-point within a given radius 
        2. Search cars for a specific year / make / model or combination of these 
        3. Search cars matching multiple year, make, model combinatins in the same search request
        4. Filter results by most car specification attributes
        5. Search for similar cars by VIN or Taxonomy VIN 
        6. Filter cars within a given price / miles / days on market (dom) range
        7. Specify a sort order for the results on price / miles / dom / listed date 
        8. Search cars for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles/dom for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/incentive/oem"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchCarIncentiveOemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_car_recents(self, request: operations.GetSearchCarRecentsRequest) -> operations.GetSearchCarRecentsResponse:
        r"""Gets Recent car listings for the given search criteria
        This API produces a list of recently active (past 90 days) cars from the market for the given search criteria
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/recents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchCarRecentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_heavy_equipment_active(self, request: operations.GetSearchHeavyEquipmentActiveRequest) -> operations.GetSearchHeavyEquipmentActiveResponse:
        r"""Gets active heavy equipment listings for the given search criteria
        This endpoint provides search on heavy equipment inventory. This API produces a list of currently active heavy equipments from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search heavy equipments around a given geo-point within a given radius 
        2. Search heavy equipments for a specific year / make / model or combination of these 
        3. Search heavy equipments matching multiple year, make, model combinatins in the same search request
        4. Filter results by most heavy equipment specification attributes
        5. Filter heavy equipments within a given price / miles range
        6. Specify a sort order for the results on price / miles / listed date 
        7. Search heavy equipments for a given City / State combination 
        8. Get Facets to build the search drill downs 
        9. Get Market averages for price/miles for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/heavy-equipment/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchHeavyEquipmentActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HeavyEquipmentsSearchResponse])
                res.heavy_equipments_search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_heavy_equipment_auto_complete(self, request: operations.GetSearchHeavyEquipmentAutoCompleteRequest) -> operations.GetSearchHeavyEquipmentAutoCompleteResponse:
        r"""API for auto-completion of inputs
        Auto-complete the inputs of your end users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/heavy-equipment/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchHeavyEquipmentAutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAutoCompleteResponse])
                res.search_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_motorcycle_active(self, request: operations.GetSearchMotorcycleActiveRequest) -> operations.GetSearchMotorcycleActiveResponse:
        r"""Gets active motorcycle listings for the given search criteria
        This endpoint provides search on motorcycle inventory. This API produces a list of currently active motorcycles from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search motorcycles around a given geo-point within a given radius 
        2. Search motorcycles for a specific year / make / model or combination of these 
        3. Search motorcycles matching multiple year, make, model combinatins in the same search request
        4. Filter results by most motorcycle specification attributes
        5. Search for similar motorcycles by VIN or Taxonomy VIN 
        6. Filter motorcycles within a given price / miles range
        7. Specify a sort order for the results on price / miles / listed date 
        8. Search motorcycles for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/motorcycle/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchMotorcycleActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MotorcycleSearchResponse])
                res.motorcycle_search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_motorcycle_auto_complete(self, request: operations.GetSearchMotorcycleAutoCompleteRequest) -> operations.GetSearchMotorcycleAutoCompleteResponse:
        r"""API for auto-completion of inputs
        Auto-complete the inputs of your end users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/motorcycle/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchMotorcycleAutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAutoCompleteResponse])
                res.search_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_rv_active(self, request: operations.GetSearchRvActiveRequest) -> operations.GetSearchRvActiveResponse:
        r"""Gets active RV listings for the given search criteria
        This endpoint provides search on RV inventory. This API produces a list of currently active RV from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search RV around a given geo-point within a given radius 
        2. Search RV for a specific year / make / model or combination of these 
        3. Search RV matching multiple year, make, model combinatins in the same search request
        4. Filter results by most RV specification attributes
        5. Filter RV within a given price / miles range
        6. Specify a sort order for the results on price / miles / listed date 
        7. Search RV for a given City / State combination 
        8. Get Facets to build the search drill downs 
        9. Get Market averages for price/miles for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/rv/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchRvActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RvSearchResponse])
                res.rv_search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_rv_auto_complete(self, request: operations.GetSearchRvAutoCompleteRequest) -> operations.GetSearchRvAutoCompleteResponse:
        r"""API for auto-completion of inputs
        Auto-complete the inputs of your end users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/rv/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchRvAutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAutoCompleteResponse])
                res.search_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_specs_car_auto_complete(self, request: operations.GetSpecsCarAutoCompleteRequest) -> operations.GetSpecsCarAutoCompleteResponse:
        r"""API for auto-completion of inputs based on taxonomy
        Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/specs/car/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpecsCarAutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpecsAutoCompleteResponse])
                res.specs_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def auto_complete(self, request: operations.AutoCompleteRequest) -> operations.AutoCompleteResponse:
        r"""API for auto-completion of inputs
        Auto-complete the inputs of your end users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAutoCompleteResponse])
                res.search_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def crm_check(self, request: operations.CrmCheckRequest) -> operations.CrmCheckResponse:
        r"""CRM check of a particular vin
        Check whether particular vin has had a listing after stipulated date or not
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crm_check/car/{vin}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CrmCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CrmResponse])
                res.crm_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def dealer_search(self, request: operations.DealerSearchRequest) -> operations.DealerSearchResponse:
        r"""Find car dealers around
        The dealers API returns a list of dealers around a given point and radius.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dealers/car"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DealerSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealersResponse])
                res.dealers_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def decode(self, request: operations.DecodeRequest) -> operations.DecodeResponse:
        r"""VIN Decoder
        Get the basic information on specifications for a car identified by a valid VIN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/decode/car/{vin}/specs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DecodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def decode_via_epi(self, request: operations.DecodeViaEpiRequest) -> operations.DecodeViaEpiResponse:
        r"""EPI VIN Decoder
        Get the basic information on specifications for a car identified by a valid VIN from EPI's decoder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/decode/car/epi/{vin}/specs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DecodeViaEpiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_cached_image(self, request: operations.GetCachedImageRequest) -> operations.GetCachedImageResponse:
        r"""Fetch cached image
        Fetch the cached car image
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/image/cache/car/{listingID}/{imageID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCachedImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.cache_image_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_car_history(self, request: operations.GetCarHistoryRequest) -> operations.GetCarHistoryResponse:
        r"""Get a cars online listing history
        The history API returns online listing history for a car identified by its VIN. History listings are sorted in the descending order of the listing date / last seen date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/history/car/{vin}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCarHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.HistoricalListing]])
                res.historical_listings = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_daily_stats(self, request: operations.GetDailyStatsRequest) -> operations.GetDailyStatsResponse:
        r"""Price, Miles and Days on Market stats
        National, state and city level stats for price, miles and dom
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/car"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DailyStats])
                res.daily_stats = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealer(self, request: operations.GetDealerRequest) -> operations.GetDealerResponse:
        r"""Dealer by id
        Get a particular dealer's information by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dealer/car/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dealer])
                res.dealer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing(self, request: operations.GetListingRequest) -> operations.GetListingResponse:
        r"""Listing by id
        Get a particular dealer listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_mds(self, request: operations.GetMdsRequest) -> operations.GetMdsResponse:
        r"""Market Days Supply
        Get the basic information on specifications for a car identified by a valid VIN
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mds/car"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Mds])
                res.mds = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_popular_cars(self, request: operations.GetPopularCarsRequest) -> operations.GetPopularCarsResponse:
        r"""Get make model wise top 50 popular cars on national, state, city level
        Get make model wise top 50 popular cars on national, state, city level
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/popular/cars"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPopularCarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PopularCars])
                res.popular_cars = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_recall_history(self, request: operations.GetRecallHistoryRequest) -> operations.GetRecallHistoryResponse:
        r"""Recall info by vin
        Get a particular recall information for a vin
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/car/recall/{vin}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRecallHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_sales_count(self, request: operations.GetSalesCountRequest) -> operations.GetSalesCountResponse:
        r"""Get sales count by make, model, year, trim or taxonomy vin
        Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sales/car"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Sales])
                res.sales = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_taxonomy_terms(self, request: operations.GetTaxonomyTermsRequest) -> operations.GetTaxonomyTermsResponse:
        r"""API for getting terms from taxonomy
        Facets on taxonomy
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/specs/car/terms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxonomyTermsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpecsAutoCompleteResponse])
                res.specs_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def rank_car(self, request: operations.RankCarRequest) -> operations.RankCarResponse:
        r"""Compute relative rank for car listings.
        Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/active/rank/listings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RankCarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CarRankResponse])
                res.car_rank_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def search(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""Gets active car listings for the given search criteria
        This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
         The search API facilitates the following use cases - 
        1. Search Cars around a given geo-point within a given radius 
        2. Search cars for a specific year / make / model or combination of these 
        3. Search cars matching multiple year, make, model combinatins in the same search request
        4. Filter results by most car specification attributes
        5. Search for similar cars by VIN or Taxonomy VIN 
        6. Filter cars within a given price / miles / days on market (dom) range
        7. Specify a sort order for the results on price / miles / dom / listed date 
        8. Search cars for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles/dom for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def search_and_rank_car(self, request: operations.SearchAndRankCarRequest) -> operations.SearchAndRankCarResponse:
        r"""Compute relative rank for car listings.
        Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/active/rank"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchAndRankCarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CarRankResponse])
                res.car_rank_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    