

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
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
        
    
    
    
    def airtravel_coordinates(self, request: operations.AirtravelCoordinatesRequest) -> operations.AirtravelCoordinatesResponse:
        r"""airtravelCoordinates
        """
        
        base_url = operations.AIRTRAVEL_COORDINATES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AirtravelCoordinatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def airtravel_multileg(self, request: operations.AirtravelMultilegRequest) -> operations.AirtravelMultilegResponse:
        r"""airtravelMultileg
        """
        
        base_url = operations.AIRTRAVEL_MULTILEG_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelMultileg"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AirtravelMultilegResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_carbon_offset(self, request: operations.ConfirmCarbonOffsetRequest) -> operations.ConfirmCarbonOffsetResponse:
        r"""confirmCarbonOffset
        """
        
        base_url = operations.CONFIRM_CARBON_OFFSET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/urbanDelivery/confirmCarbonOffset"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmCarbonOffsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_carbon_offset1(self, request: operations.ConfirmCarbonOffset1Request) -> operations.ConfirmCarbonOffset1Response:
        r"""confirmCarbonOffset
        """
        
        base_url = operations.CONFIRM_CARBON_OFFSET1_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery/confirmCarbonOffset"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmCarbonOffset1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_carbon_offset3(self, request: operations.ConfirmCarbonOffset3Request) -> operations.ConfirmCarbonOffset3Response:
        r"""confirmCarbonOffset
        """
        
        base_url = operations.CONFIRM_CARBON_OFFSET3_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelMultileg/confirmCarbonOffset"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmCarbonOffset3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_carbon_offset4(self, request: operations.ConfirmCarbonOffset4Request) -> operations.ConfirmCarbonOffset4Response:
        r"""confirmCarbonOffset
        """
        
        base_url = operations.CONFIRM_CARBON_OFFSET4_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates/confirmCarbonOffset"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmCarbonOffset4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_carbon_offset5(self, request: operations.ConfirmCarbonOffset5Request) -> operations.ConfirmCarbonOffset5Response:
        r"""confirmCarbonOffset
        """
        
        base_url = operations.CONFIRM_CARBON_OFFSET5_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/roadDistance/confirmCarbonOffset"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmCarbonOffset5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment(self, request: operations.ConfirmPaymentRequest) -> operations.ConfirmPaymentResponse:
        r"""confirmPayment
        """
        
        base_url = operations.CONFIRM_PAYMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/urbanDelivery/confirmPayment"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment1(self, request: operations.ConfirmPayment1Request) -> operations.ConfirmPayment1Response:
        r"""confirmPayment
        """
        
        base_url = operations.CONFIRM_PAYMENT1_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery/confirmPayment"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPayment1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment3(self, request: operations.ConfirmPayment3Request) -> operations.ConfirmPayment3Response:
        r"""confirmPayment
        """
        
        base_url = operations.CONFIRM_PAYMENT3_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelMultileg/confirmPayment"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPayment3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment4(self, request: operations.ConfirmPayment4Request) -> operations.ConfirmPayment4Response:
        r"""confirmPayment
        """
        
        base_url = operations.CONFIRM_PAYMENT4_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates/confirmPayment"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPayment4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment5(self, request: operations.ConfirmPayment5Request) -> operations.ConfirmPayment5Response:
        r"""confirmPayment
        """
        
        base_url = operations.CONFIRM_PAYMENT5_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/roadDistance/confirmPayment"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPayment5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment_of_transaction(self, request: operations.ConfirmPaymentOfTransactionRequest) -> operations.ConfirmPaymentOfTransactionResponse:
        r"""confirmTransaction
        """
        
        base_url = operations.CONFIRM_PAYMENT_OF_TRANSACTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/urbanDelivery/confirmTransaction"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPaymentOfTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment_of_transaction1(self, request: operations.ConfirmPaymentOfTransaction1Request) -> operations.ConfirmPaymentOfTransaction1Response:
        r"""confirmTransaction
        """
        
        base_url = operations.CONFIRM_PAYMENT_OF_TRANSACTION1_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery/confirmTransaction"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPaymentOfTransaction1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment_of_transaction3(self, request: operations.ConfirmPaymentOfTransaction3Request) -> operations.ConfirmPaymentOfTransaction3Response:
        r"""confirmTransaction
        """
        
        base_url = operations.CONFIRM_PAYMENT_OF_TRANSACTION3_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelMultileg/confirmTransaction"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPaymentOfTransaction3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment_of_transaction4(self, request: operations.ConfirmPaymentOfTransaction4Request) -> operations.ConfirmPaymentOfTransaction4Response:
        r"""confirmTransaction
        """
        
        base_url = operations.CONFIRM_PAYMENT_OF_TRANSACTION4_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates/confirmTransaction"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPaymentOfTransaction4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment_of_transaction5(self, request: operations.ConfirmPaymentOfTransaction5Request) -> operations.ConfirmPaymentOfTransaction5Response:
        r"""confirmTransaction
        """
        
        base_url = operations.CONFIRM_PAYMENT_OF_TRANSACTION5_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/roadDistance/confirmTransaction"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPaymentOfTransaction5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirms_planting(self, request: operations.ConfirmsPlantingRequest) -> operations.ConfirmsPlantingResponse:
        r"""confirmPlanting
        """
        
        base_url = operations.CONFIRMS_PLANTING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/urbanDelivery/confirmPlanting"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmsPlantingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirms_planting2(self, request: operations.ConfirmsPlanting2Request) -> operations.ConfirmsPlanting2Response:
        r"""confirmPlanting
        """
        
        base_url = operations.CONFIRMS_PLANTING2_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery/confirmPlanting"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmsPlanting2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirms_planting3(self, request: operations.ConfirmsPlanting3Request) -> operations.ConfirmsPlanting3Response:
        r"""confirmPlanting
        """
        
        base_url = operations.CONFIRMS_PLANTING3_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelMultileg/confirmPlanting"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmsPlanting3Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirms_planting4(self, request: operations.ConfirmsPlanting4Request) -> operations.ConfirmsPlanting4Response:
        r"""confirmPlanting
        """
        
        base_url = operations.CONFIRMS_PLANTING4_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates/confirmPlanting"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmsPlanting4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirms_planting5(self, request: operations.ConfirmsPlanting5Request) -> operations.ConfirmsPlanting5Response:
        r"""confirmPlanting
        """
        
        base_url = operations.CONFIRMS_PLANTING5_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/roadDistance/confirmPlanting"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmsPlanting5Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def ecommerce_delivery(self, request: operations.EcommerceDeliveryRequest) -> operations.EcommerceDeliveryResponse:
        r"""ecommerceDelivery
        """
        
        base_url = operations.ECOMMERCE_DELIVERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EcommerceDeliveryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def request_api_key(self, request: operations.RequestAPIKeyRequest) -> operations.RequestAPIKeyResponse:
        r"""requestApiKey
        """
        
        base_url = operations.REQUEST_API_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/requestApiKey"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestAPIKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def road_distance(self, request: operations.RoadDistanceRequest) -> operations.RoadDistanceResponse:
        r"""RoadDistance
        """
        
        base_url = operations.ROAD_DISTANCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/roadDistance"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RoadDistanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def urban_delivery(self, request: operations.UrbanDeliveryRequest) -> operations.UrbanDeliveryResponse:
        r"""urbanDelivery
        """
        
        base_url = operations.URBAN_DELIVERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/urbanDelivery"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UrbanDeliveryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    