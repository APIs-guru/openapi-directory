import requests
from sdk.models import operations
from . import utils

class Avatars:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def avatars_get_browser(self, request: operations.AvatarsGetBrowserRequest) -> operations.AvatarsGetBrowserResponse:
        r"""Get Browser Icon
        You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/avatars/browsers/{code}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AvatarsGetBrowserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def avatars_get_credit_card(self, request: operations.AvatarsGetCreditCardRequest) -> operations.AvatarsGetCreditCardResponse:
        r"""Get Credit Card Icon
        The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/avatars/credit-cards/{code}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AvatarsGetCreditCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def avatars_get_favicon(self, request: operations.AvatarsGetFaviconRequest) -> operations.AvatarsGetFaviconResponse:
        r"""Get Favicon
        Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/avatars/favicon"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AvatarsGetFaviconResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def avatars_get_flag(self, request: operations.AvatarsGetFlagRequest) -> operations.AvatarsGetFlagResponse:
        r"""Get Country Flag
        You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/avatars/flags/{code}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AvatarsGetFlagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def avatars_get_image(self, request: operations.AvatarsGetImageRequest) -> operations.AvatarsGetImageResponse:
        r"""Get Image from URL
        Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/avatars/image"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AvatarsGetImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def avatars_get_initials(self, request: operations.AvatarsGetInitialsRequest) -> operations.AvatarsGetInitialsResponse:
        r"""Get User Initials
        Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.
        
        You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/avatars/initials"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AvatarsGetInitialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def avatars_get_qr(self, request: operations.AvatarsGetQrRequest) -> operations.AvatarsGetQrResponse:
        r"""Get QR Code
        Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/avatars/qr"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AvatarsGetQrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    