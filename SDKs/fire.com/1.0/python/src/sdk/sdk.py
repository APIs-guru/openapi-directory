

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api-preprod.fire.com/business/v1",
	"https://api.fire.com/business/v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def activate_mandate(self, request: operations.ActivateMandateRequest) -> operations.ActivateMandateResponse:
        r"""Activate a direct debit mandate
        This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
        The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mandates/{mandateUuid}/activate", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivateMandateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def add_account(self, request: operations.AddAccountRequest) -> operations.AddAccountResponse:
        r"""Add a new account
        Creates a new fire.com account.
        
        **Please note there is a charge associated with creating a new account.**
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems])
                res.oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items = out

        return res

    
    def add_bank_transfer_batch_payment(self, request: operations.AddBankTransferBatchPaymentRequest) -> operations.AddBankTransferBatchPaymentResponse:
        r"""Add payment for an bank transfers
        There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
        
        **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
        
        **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/banktransfers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddBankTransferBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema])
                res.onebatches_1_percent_7_bbatch_uuid_percent_7_d_1internaltransfers_post_responses_200_content_application_1json_schema = out

        return res

    
    def add_internal_transfer_batch_payment(self, request: operations.AddInternalTransferBatchPaymentRequest) -> operations.AddInternalTransferBatchPaymentResponse:
        r"""Add payment for an internal transfers
        Simply specify the source account, destination account, amount and a reference.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/internaltransfers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddInternalTransferBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddInternalTransferBatchPaymentNewBatchItemResponse])
                res.new_batch_item_response = out

        return res

    
    def authenticate(self, request: operations.AuthenticateRequest) -> operations.AuthenticateResponse:
        r"""Authenticate with the API.
        Authenticate with the API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/accesstokens"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AuthenticateAccessToken])
                res.access_token = out

        return res

    
    def cancel_batch_payment(self, request: operations.CancelBatchPaymentRequest) -> operations.CancelBatchPaymentResponse:
        r"""Cancel a batch
        Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def cancel_mandate_by_uuid(self, request: operations.CancelMandateByUUIDRequest) -> operations.CancelMandateByUUIDResponse:
        r"""Cancel a direct debit mandate
        This endpoint allows you to cancel a direct debit mandate.
        The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mandates/{mandateUuid}/cancel", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelMandateByUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def create_api_application(self, request: operations.CreateAPIApplicationRequest) -> operations.CreateAPIApplicationResponse:
        r"""Create a new API Application
        Create a new API Application with specified permissions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAPIApplicationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateAPIApplicationAPIApplication])
                res.api_application = out

        return res

    
    def create_batch_payment(self, request: operations.CreateBatchPaymentRequest) -> operations.CreateBatchPaymentResponse:
        r"""Create a new bath of payments
        This is the first step in creating a batch payment.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/batches"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateBatchPaymentNewBatchResponse])
                res.new_batch_response = out

        return res

    
    def create_new_card(self, request: operations.CreateNewCardRequest) -> operations.CreateNewCardResponse:
        r"""Create a new debit card.
        You can create multiple debit cards which can be linked to your fire.com accounts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cards"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNewCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateNewCardNewCardResponse])
                res.new_card_response = out

        return res

    
    def delete_bank_transfer_batch_payment(self, request: operations.DeleteBankTransferBatchPaymentRequest) -> operations.DeleteBankTransferBatchPaymentResponse:
        r"""Remove a Payment from the Batch (Bank Transfers)
        Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/banktransfers/{itemUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBankTransferBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_internal_transfer_batch_payment(self, request: operations.DeleteInternalTransferBatchPaymentRequest) -> operations.DeleteInternalTransferBatchPaymentResponse:
        r"""Remove a Payment from the Batch (Internal Transfer)
        Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/internaltransfers/{itemUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteInternalTransferBatchPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_account_by_id(self, request: operations.GetAccountByIDRequest) -> operations.GetAccountByIDResponse:
        r"""Retrieve the details of a fire.com Account
        You can retrieve the details of a fire.com Account by its `ican`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{ican}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems])
                res.oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_accounts(self) -> operations.GetAccountsResponse:
        r"""List all fire.com Accounts
        Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountsAccounts])
                res.accounts = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_batches(self, request: operations.GetBatchesRequest) -> operations.GetBatchesResponse:
        r"""List batches
        Returns the list of batch with the specified types and statuses.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/batches"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBatchesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBatchesBatchItems])
                res.batch_items = out

        return res

    
    def get_details_single_batch(self, request: operations.GetDetailsSingleBatchRequest) -> operations.GetDetailsSingleBatchResponse:
        r"""Get details of a single Batch
        Returns the details of the batch specified in the API endpoint - {batchUuid}.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDetailsSingleBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems])
                res.onebatches_get_responses_200_content_application_1json_schema_properties_items_items = out

        return res

    
    def get_direct_debit_by_uuid(self, request: operations.GetDirectDebitByUUIDRequest) -> operations.GetDirectDebitByUUIDResponse:
        r"""Get the deails of a direct debit
        Retrieve all details of a single direct debit collection/payment, whether successful or not.
        The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directdebits/{directDebitUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectDebitByUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems])
                res.onedirectdebits_get_responses_200_content_application_1json_schema_properties_directdebits_items = out

        return res

    
    def get_direct_debit_mandates(self) -> operations.GetDirectDebitMandatesResponse:
        r"""List all direct debit mandates
        The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mandates"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectDebitMandatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDirectDebitMandatesMandates])
                res.mandates = out

        return res

    
    def get_direct_debits_for_mandate_uuid(self, request: operations.GetDirectDebitsForMandateUUIDRequest) -> operations.GetDirectDebitsForMandateUUIDResponse:
        r"""Get all DD payments associated with a direct debit mandate
        Retrieve all direct debit payments associated with a direct debit mandate.
        The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/directdebits"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectDebitsForMandateUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDirectDebitsForMandateUUIDDirectDebits])
                res.direct_debits = out

        return res

    
    def get_items_batch_bank_transfer(self, request: operations.GetItemsBatchBankTransferRequest) -> operations.GetItemsBatchBankTransferResponse:
        r"""List items in a Batch
        Returns a paginated list of items in the specified batch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/banktransfers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemsBatchBankTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchema])
                res.onebatches_get_responses_200_content_application_1json_schema = out

        return res

    
    def get_items_batch_internal_trasnfer(self, request: operations.GetItemsBatchInternalTrasnferRequest) -> operations.GetItemsBatchInternalTrasnferResponse:
        r"""List items in a Batch
        Returns a paginated list of items in the specified batch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/internaltransfers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetItemsBatchInternalTrasnferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnebatchesGetResponses200ContentApplication1jsonSchema])
                res.onebatches_get_responses_200_content_application_1json_schema = out

        return res

    
    def get_list_of_aspsps(self, request: operations.GetListOfAspspsRequest) -> operations.GetListOfAspspsResponse:
        r"""Get list of ASPSPs / Banks
        Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
        ***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aspsps"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfAspspsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfAspspsAspsps])
                res.aspsps = out

        return res

    
    def get_listof_approvers_for_batch(self, request: operations.GetListofApproversForBatchRequest) -> operations.GetListofApproversForBatchResponse:
        r"""List Approvers for a Batch
        Returns a list of approvers for this batch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/batches/{batchUuid}/approvals", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListofApproversForBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListofApproversForBatchBatchApprovers])
                res.batch_approvers = out

        return res

    
    def get_listof_cards(self) -> operations.GetListofCardsResponse:
        r"""View List of Cards.
        Returns a list of cards related to your fire.com account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cards"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListofCardsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListofCardsCards])
                res.cards = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_mandate(self, request: operations.GetMandateRequest) -> operations.GetMandateResponse:
        r"""Get direct debit mandate details
        Retrieve all details for a direct debit mandate.
        The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mandates/{mandateUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMandateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems])
                res.onemandates_get_responses_200_content_application_1json_schema_properties_mandates_items = out

        return res

    
    def get_payees(self) -> operations.GetPayeesResponse:
        r"""List all Payee Bank Accounts
        Returns all your payee bank accounts. 
        
        Ordered by date added descending. 
        
        Can be paginated.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payees"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPayeesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPayeesPayee])
                res.payee = out

        return res

    
    def get_payment_details(self, request: operations.GetPaymentDetailsRequest) -> operations.GetPaymentDetailsResponse:
        r"""Get Payment Details
        Returns the details of a specific payment.
        
        As the customer goes through the process of making the payment the status of the payment will change.
        
        * `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
        * `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
        * `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
        * `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
        * `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
        * `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.
        
        
        You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/payments/{paymentUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPaymentDetailsPaymentRequest])
                res.payment_request = out

        return res

    
    def get_transactions_by_id(self, request: operations.GetTransactionsByIDRequest) -> operations.GetTransactionsByIDResponse:
        r"""List transactions for an account
        Retrieve a list of transactions against an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{ican}/transactions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransactionsByIDTransaction])
                res.transaction = out

        return res

    
    def get_transactions_filtered_by_id(self, request: operations.GetTransactionsFilteredByIDRequest) -> operations.GetTransactionsFilteredByIDResponse:
        r"""Filtered list of transactions for an account
        Retrieve a filtered list of transactions against an account.
        * `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
        * `dateRangeTo` - A millisecond epoch time specifying the date range end date.
        * `searchKeyword` - Search term to filter by from the reference field (`myRef`).
        * `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{ican}/transactions/filter", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionsFilteredByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema])
                res.oneaccounts_1_percent_7_bican_percent_7_d_1transactions_get_responses_200_content_application_1json_schema = out

        return res

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""Returns details of a specific fire.com user.
        You can retrieve the details of a specific fire.com user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OneusersGetResponses200ContentApplication1jsonSchemaItems])
                res.oneusers_get_responses_200_content_application_1json_schema_items = out

        return res

    
    def get_users(self) -> operations.GetUsersResponse:
        r"""Returns list of all users on your fire.com account
        You can retrieve the details of all fire.com users on your acount.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetUsersUser]])
                res.users = out

        return res

    
    def new_payment_request(self, request: operations.NewPaymentRequestRequest) -> operations.NewPaymentRequestResponse:
        r"""Create a Fire Open Payment request
        Creates a new Fire Open Payment Payment request. A code is returned that can be shared to your customers as a URL by any channel you wish.
        You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/paymentrequests"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NewPaymentRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.NewPaymentRequestNewPaymentRequestResponse])
                res.new_payment_request_response = out

        return res

    
    def reject_direct_debit(self, request: operations.RejectDirectDebitRequest) -> operations.RejectDirectDebitResponse:
        r"""Reject a direct debit payment
        This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
        Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directdebits/{directDebitUuid}/reject", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RejectDirectDebitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def submit_batch(self) -> operations.SubmitBatchResponse:
        r"""Submit a batch for approval
        Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
        
        You can only submit a batch while it is in the OPEN state.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/batches"
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SubmitBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def update_mandate_alias(self, request: operations.UpdateMandateAliasRequest) -> operations.UpdateMandateAliasResponse:
        r"""Update a direct debit mandate alias
        Update Direct Debit Mandate Alias
        The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mandates/{mandateUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMandateAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    