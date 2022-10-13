import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.fungenerators.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def delete_fact(self, request: operations.DeleteFactRequest) -> operations.DeleteFactResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFactResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact(self, request: operations.GetFactRequest) -> operations.GetFactResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_categories(self, request: operations.GetFactCategoriesRequest) -> operations.GetFactCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/categories"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactCategoriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_fod(self, request: operations.GetFactFodRequest) -> operations.GetFactFodResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/fod"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactFodResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_fod_categories(self, request: operations.GetFactFodCategoriesRequest) -> operations.GetFactFodCategoriesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/fod/categories"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactFodCategoriesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_numbers(self, request: operations.GetFactNumbersRequest) -> operations.GetFactNumbersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/numbers"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactNumbersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_onthisday_born(self, request: operations.GetFactOnthisdayBornRequest) -> operations.GetFactOnthisdayBornResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/onthisday/born"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactOnthisdayBornResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_onthisday_died(self, request: operations.GetFactOnthisdayDiedRequest) -> operations.GetFactOnthisdayDiedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/onthisday/died"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactOnthisdayDiedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_onthisday_event(self, request: operations.GetFactOnthisdayEventRequest) -> operations.GetFactOnthisdayEventResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/onthisday/event"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactOnthisdayEventResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_random(self, request: operations.GetFactRandomRequest) -> operations.GetFactRandomResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/random"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactRandomResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def get_fact_search(self, request: operations.GetFactSearchRequest) -> operations.GetFactSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact/search"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFactSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    
    def put_fact(self, request: operations.PutFactRequest) -> operations.PutFactResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/fact"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutFactResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    