import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class StromkontoLedger:
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

    
    def prepare_transaction(self, request: operations.PrepareTransactionRequest) -> operations.PrepareTransactionResponse:
        r"""Prepare Transaction
        Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stromkonto/prepareTransaction"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrepareTransactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def stromkonto_balances(self, request: operations.StromkontoBalancesRequest) -> operations.StromkontoBalancesResponse:
        r"""Balances
        Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stromkonto/balances"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StromkontoBalancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Balance]])
                res.balances = out

        return res

    
    def stromkonto_choices(self, request: operations.StromkontoChoicesRequest) -> operations.StromkontoChoicesResponse:
        r"""Selectable Choices for customer
        Signable choices (contract changes) for customer.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stromkonto/choices"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StromkontoChoicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Balance]])
                res.balances = out

        return res

    
    def stromkonto_login(self, request: operations.StromkontoLoginRequest) -> operations.StromkontoLoginResponse:
        r"""Login (via Mail)
        Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stromkonto/login"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StromkontoLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.StromkontoLogin200ApplicationJSON])
                res.stromkonto_login_200_application_json_object = out

        return res

    
    def stromkonto_register(self, request: operations.StromkontoRegisterRequest) -> operations.StromkontoRegisterResponse:
        r"""Register (new Stromkonto)
        Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stromkonto/register"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StromkontoRegisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    