import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://www.googleapis.com/androidpublisher/v1.1/applications",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def androidpublisher_inapppurchases_get(self, request: operations.AndroidpublisherInapppurchasesGetRequest) -> operations.AndroidpublisherInapppurchasesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{packageName}/inapp/{productId}/purchases/{token}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherInapppurchasesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def androidpublisher_purchases_cancel(self, request: operations.AndroidpublisherPurchasesCancelRequest) -> operations.AndroidpublisherPurchasesCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{packageName}/subscriptions/{subscriptionId}/purchases/{token}/cancel", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_purchases_get(self, request: operations.AndroidpublisherPurchasesGetRequest) -> operations.AndroidpublisherPurchasesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{packageName}/subscriptions/{subscriptionId}/purchases/{token}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherPurchasesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    