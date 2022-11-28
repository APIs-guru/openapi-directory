

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"http://change.local",
	"https://{defaultHost}",
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
        
    
    
    
    def get_api_v1_donations_carbon_calculate(self, request: operations.GetAPIV1DonationsCarbonCalculateRequest) -> operations.GetAPIV1DonationsCarbonCalculateResponse:
        r"""Calculate shipping carbon offset
        Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/donations/carbon_calculate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1DonationsCarbonCalculateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_donations_carbon_stats(self, request: operations.GetAPIV1DonationsCarbonStatsRequest) -> operations.GetAPIV1DonationsCarbonStatsResponse:
        r"""Retrieve carbon offset stats
        Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/donations/carbon_stats"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1DonationsCarbonStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_donations_crypto_calculate(self, request: operations.GetAPIV1DonationsCryptoCalculateRequest) -> operations.GetAPIV1DonationsCryptoCalculateResponse:
        r"""Calculate crypto carbon offset
        Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/donations/crypto_calculate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1DonationsCryptoCalculateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_donations_index(self, request: operations.GetAPIV1DonationsIndexRequest) -> operations.GetAPIV1DonationsIndexResponse:
        r"""List your donations
        Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/donations/index"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1DonationsIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_donations_show(self, request: operations.GetAPIV1DonationsShowRequest) -> operations.GetAPIV1DonationsShowResponse:
        r"""Retrieve a donation
        Retrieves the details of a donation you've previously made.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/donations/show"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1DonationsShowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_nonprofits_list(self, request: operations.GetAPIV1NonprofitsListRequest) -> operations.GetAPIV1NonprofitsListResponse:
        r"""Search a nonprofit
        Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/nonprofits/list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1NonprofitsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_api_v1_nonprofits_show(self, request: operations.GetAPIV1NonprofitsShowRequest) -> operations.GetAPIV1NonprofitsShowResponse:
        r"""Show a nonprofit
        Retrieves information for a nonprofit.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/nonprofits/show"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1NonprofitsShowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_api_v1_donations_create(self, request: operations.PostAPIV1DonationsCreateRequest) -> operations.PostAPIV1DonationsCreateResponse:
        r"""Create a donation
        Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/donations/create"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIV1DonationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    