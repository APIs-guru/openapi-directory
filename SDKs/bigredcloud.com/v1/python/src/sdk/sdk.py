

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://app.bigredcloud.com/API",
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
        
    
    
    
    def accounts_get(self) -> operations.AccountsGetResponse:
        r"""Returns a list of company's Accounts. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" and \"code\" fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounts"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultAccountDto])
                res.page_result_account_dto_ = out

        return res

    
    def analysis_categories_get(self) -> operations.AnalysisCategoriesGetResponse:
        r"""Returns a list of company's Analysis Categories. Supports OData querying protocol.
        Filtering is allowed by \"categoryTypeId\" field.
        Ordering is allowed by \"id\" and \"orderIndex\" fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/analysisCategories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AnalysisCategoriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultAnalysisCategoryDto])
                res.page_result_analysis_category_dto_ = out

        return res

    
    def bank_accounts_delete(self, request: operations.BankAccountsDeleteRequest) -> operations.BankAccountsDeleteResponse:
        r"""Removes an existing Bank Account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/bankAccounts/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BankAccountsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_accounts_delete_200_application_json_object = out

        return res

    
    def bank_accounts_get(self) -> operations.BankAccountsGetResponse:
        r"""Returns a list of company's Bank Account. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" and \"acCode\" fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/bankAccounts"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BankAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultBankAccountQueryDto])
                res.page_result_bank_account_query_dto_ = out

        return res

    
    def bank_accounts_post(self, request: operations.BankAccountsPostRequest) -> operations.BankAccountsPostResponse:
        r"""Creates a new Bank Account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/bankAccounts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankAccountsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_accounts_post_200_application_json_object = out

        return res

    
    def bank_accounts_process_batch(self, request: operations.BankAccountsProcessBatchRequest) -> operations.BankAccountsProcessBatchResponse:
        r"""Processes a batch of Bank Accounts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/bankAccounts/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankAccountsProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_accounts_process_batch_200_application_json_object = out

        return res

    
    def bank_accounts_put(self, request: operations.BankAccountsPutRequest) -> operations.BankAccountsPutResponse:
        r"""Updates an existing Bank Account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/bankAccounts/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BankAccountsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.bank_accounts_put_200_application_json_object = out

        return res

    
    def book_tran_types_get(self) -> operations.BookTranTypesGetResponse:
        r"""Returns a list of global Book Transactions' Types. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/bookTranTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BookTranTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultBookTranTypeDto])
                res.page_result_book_tran_type_dto_ = out

        return res

    
    def cash_payments_delete(self, request: operations.CashPaymentsDeleteRequest) -> operations.CashPaymentsDeleteResponse:
        r"""Removes an existing Cash Payment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/cashPayments/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CashPaymentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cash_payments_delete_200_application_json_object = out

        return res

    
    def cash_payments_get(self) -> operations.CashPaymentsGetResponse:
        r"""Returns a list of company's Cash Payments. Supports OData querying protocol.
        Filtering is allowed by \"entryDate\" field.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/cashPayments"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CashPaymentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultCashPaymentQueryDto])
                res.page_result_cash_payment_query_dto_ = out

        return res

    
    def cash_payments_post(self, request: operations.CashPaymentsPostRequest) -> operations.CashPaymentsPostResponse:
        r"""Creates a new Cash Payment.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/cashPayments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CashPaymentsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cash_payments_post_200_application_json_object = out

        return res

    
    def cash_payments_process_batch(self, request: operations.CashPaymentsProcessBatchRequest) -> operations.CashPaymentsProcessBatchResponse:
        r"""Processes a batch of Cash Payments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/cashPayments/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CashPaymentsProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cash_payments_process_batch_200_application_json_object = out

        return res

    
    def cash_payments_put(self, request: operations.CashPaymentsPutRequest) -> operations.CashPaymentsPutResponse:
        r"""Updates an existing Cash Payment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/cashPayments/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CashPaymentsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cash_payments_put_200_application_json_object = out

        return res

    
    def cash_receipts_delete(self, request: operations.CashReceiptsDeleteRequest) -> operations.CashReceiptsDeleteResponse:
        r"""Removes an existing Cash Receipt.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/cashReceipts/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CashReceiptsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cash_receipts_delete_200_application_json_object = out

        return res

    
    def cash_receipts_get(self) -> operations.CashReceiptsGetResponse:
        r"""Returns a list of company's Cash Receipts. Supports OData querying protocol.
        Filtering is allowed by \"entryDate\" field.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/cashReceipts"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CashReceiptsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultCashReceiptQueryDto])
                res.page_result_cash_receipt_query_dto_ = out

        return res

    
    def cash_receipts_post(self, request: operations.CashReceiptsPostRequest) -> operations.CashReceiptsPostResponse:
        r"""Creates a new Cash Receipt.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/cashReceipts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CashReceiptsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cash_receipts_post_200_application_json_object = out

        return res

    
    def cash_receipts_process_batch(self, request: operations.CashReceiptsProcessBatchRequest) -> operations.CashReceiptsProcessBatchResponse:
        r"""Processes a batch of Cash Receipts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/cashReceipts/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CashReceiptsProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cash_receipts_process_batch_200_application_json_object = out

        return res

    
    def cash_receipts_put(self, request: operations.CashReceiptsPutRequest) -> operations.CashReceiptsPutResponse:
        r"""Updates an existing Cash Receipt.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/cashReceipts/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CashReceiptsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cash_receipts_put_200_application_json_object = out

        return res

    
    def category_types_get(self) -> operations.CategoryTypesGetResponse:
        r"""Returns a list of company's Category Types. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/categoryTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CategoryTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultCategoryTypeDto])
                res.page_result_category_type_dto_ = out

        return res

    
    def company_settings_get(self) -> operations.CompanySettingsGetResponse:
        r"""Returns a list of company settings. Supports OData querying protocol.
        Filtering is forbidden.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/companySettings"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanySettingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultCompanySettingDto])
                res.page_result_company_setting_dto_ = out

        return res

    
    def company_setup_config_get(self) -> operations.CompanySetupConfigGetResponse:
        r"""Returns the company configuration settings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/companySetupConfig"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanySetupConfigGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanySetupConfigViewModel])
                res.company_setup_config_view_model = out

        return res

    
    def company_setup_config_get_company_options(self) -> operations.CompanySetupConfigGetCompanyOptionsResponse:
        r"""Returns the company option setting.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/companySetupConfig/getCompanyOptions"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanySetupConfigGetCompanyOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyOptionDto])
                res.company_option_dto = out

        return res

    
    def company_setup_config_get_financial_year(self) -> operations.CompanySetupConfigGetFinancialYearResponse:
        r"""Returns the financial year.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/companySetupConfig/getFinancialYear"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CompanySetupConfigGetFinancialYearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinancialYearDto])
                res.financial_year_dto = out

        return res

    
    def customers_delete(self, request: operations.CustomersDeleteRequest) -> operations.CustomersDeleteResponse:
        r"""Removes an existing Customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/customers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customers_delete_200_application_json_object = out

        return res

    
    def customers_get(self) -> operations.CustomersGetResponse:
        r"""Returns a list of company's Customers. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" and \"code\" fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/customers"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultCustomerQueryDto])
                res.page_result_customer_query_dto_ = out

        return res

    
    def customers_get_account_trans(self, request: operations.CustomersGetAccountTransRequest) -> operations.CustomersGetAccountTransResponse:
        r"""Returns a list of Customer's account transactions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/customers/{itemId}/accountTrans", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersGetAccountTransResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AccountTranDto]])
                res.account_tran_dtos = out

        return res

    
    def customers_get_opening_balance(self, request: operations.CustomersGetOpeningBalanceRequest) -> operations.CustomersGetOpeningBalanceResponse:
        r"""Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/customers/{itemId}/openingBalance", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersGetOpeningBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OwnerOpeningBalanceInPeriodsDto])
                res.owner_opening_balance_in_periods_dto = out

        return res

    
    def customers_get_opening_balance_list(self, request: operations.CustomersGetOpeningBalanceListRequest) -> operations.CustomersGetOpeningBalanceListResponse:
        r"""Returns a list of Customer's opening balance transactions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/customers/{itemId}/openingBalanceList", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersGetOpeningBalanceListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OwnerOpeningBalanceDto]])
                res.owner_opening_balance_dtos = out

        return res

    
    def customers_get_quotes(self, request: operations.CustomersGetQuotesRequest) -> operations.CustomersGetQuotesResponse:
        r"""Returns a list of Customer's quotes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/customers/{itemId}/quotes", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersGetQuotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.QuoteDto]])
                res.quote_dtos = out

        return res

    
    def customers_post(self, request: operations.CustomersPostRequest) -> operations.CustomersPostResponse:
        r"""Creates a new Customer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/customers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customers_post_200_application_json_object = out

        return res

    
    def customers_process_batch(self, request: operations.CustomersProcessBatchRequest) -> operations.CustomersProcessBatchResponse:
        r"""Processes a batch of Customers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/customers/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customers_process_batch_200_application_json_object = out

        return res

    
    def customers_put(self, request: operations.CustomersPutRequest) -> operations.CustomersPutResponse:
        r"""Updates an existing Customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/customers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CustomersPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customers_put_200_application_json_object = out

        return res

    
    def email_send_email_statement(self, request: operations.EmailSendEmailStatementRequest) -> operations.EmailSendEmailStatementResponse:
        r"""Sends a Statement email.
        If \"toAddress\" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/email/sendEmailStatement"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EmailSendEmailStatementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_send_email_statement_200_application_json_object = out

        return res

    
    def email_send_quote(self, request: operations.EmailSendQuoteRequest) -> operations.EmailSendQuoteResponse:
        r"""Sends a Quote email.
        If \"toAddress\" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/email/sendQuote"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EmailSendQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_send_quote_200_application_json_object = out

        return res

    
    def email_send_sales_invoice(self, request: operations.EmailSendSalesInvoiceRequest) -> operations.EmailSendSalesInvoiceResponse:
        r"""Sends a Sales Invoice email.
        If \"toAddress\" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/email/sendSalesInvoice"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EmailSendSalesInvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_send_sales_invoice_200_application_json_object = out

        return res

    
    def get_v1_bank_accounts_id_(self, request: operations.GetV1BankAccountsIDRequest) -> operations.GetV1BankAccountsIDResponse:
        r"""Returns information about a single Bank Account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/bankAccounts/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1BankAccountsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BankAccountDto])
                res.bank_account_dto = out

        return res

    
    def get_v1_cash_payments_id_(self, request: operations.GetV1CashPaymentsIDRequest) -> operations.GetV1CashPaymentsIDResponse:
        r"""Returns information about a single Cash Payment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/cashPayments/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1CashPaymentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CashPaymentDto])
                res.cash_payment_dto = out

        return res

    
    def get_v1_cash_receipts_id_(self, request: operations.GetV1CashReceiptsIDRequest) -> operations.GetV1CashReceiptsIDResponse:
        r"""Returns information about a single Cash Receipt.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/cashReceipts/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1CashReceiptsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CashReceiptDto])
                res.cash_receipt_dto = out

        return res

    
    def get_v1_customers_id_(self, request: operations.GetV1CustomersIDRequest) -> operations.GetV1CustomersIDResponse:
        r"""Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/customers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerDto])
                res.customer_dto = out

        return res

    
    def get_v1_payments_id_(self, request: operations.GetV1PaymentsIDRequest) -> operations.GetV1PaymentsIDResponse:
        r"""Returns information about a single Payments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payments/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1PaymentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentDto])
                res.payment_dto = out

        return res

    
    def get_v1_products_id_(self, request: operations.GetV1ProductsIDRequest) -> operations.GetV1ProductsIDResponse:
        r"""Returns information about a single Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1ProductsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductDto])
                res.product_dto = out

        return res

    
    def get_v1_purchases_id_(self, request: operations.GetV1PurchasesIDRequest) -> operations.GetV1PurchasesIDResponse:
        r"""Returns information about a single Purchases.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/purchases/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1PurchasesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PurchaseDto])
                res.purchase_dto = out

        return res

    
    def get_v1_quotes_id_(self, request: operations.GetV1QuotesIDRequest) -> operations.GetV1QuotesIDResponse:
        r"""Returns information about a single Quote.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/quotes/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1QuotesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QuoteDto])
                res.quote_dto = out

        return res

    
    def get_v1_sales_credit_notes_id_(self, request: operations.GetV1SalesCreditNotesIDRequest) -> operations.GetV1SalesCreditNotesIDResponse:
        r"""Returns information about a single Sales Credit Note.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesCreditNotes/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1SalesCreditNotesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SalesInvoiceCreditNoteDto])
                res.sales_invoice_credit_note_dto = out

        return res

    
    def get_v1_sales_entries_id_(self, request: operations.GetV1SalesEntriesIDRequest) -> operations.GetV1SalesEntriesIDResponse:
        r"""Returns information about a single Sales Entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesEntries/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1SalesEntriesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SalesEntryDto])
                res.sales_entry_dto = out

        return res

    
    def get_v1_sales_invoices_id_(self, request: operations.GetV1SalesInvoicesIDRequest) -> operations.GetV1SalesInvoicesIDResponse:
        r"""Returns information about a single Sales Invoice.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesInvoices/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1SalesInvoicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SalesInvoiceCreditNoteDto])
                res.sales_invoice_credit_note_dto = out

        return res

    
    def get_v1_sales_reps_id_(self, request: operations.GetV1SalesRepsIDRequest) -> operations.GetV1SalesRepsIDResponse:
        r"""Returns information about a single SaleRep.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesReps/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1SalesRepsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SaleRepsDto])
                res.sale_reps_dto = out

        return res

    
    def get_v1_suppliers_id_(self, request: operations.GetV1SuppliersIDRequest) -> operations.GetV1SuppliersIDResponse:
        r"""Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/suppliers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1SuppliersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupplierDto])
                res.supplier_dto = out

        return res

    
    def owner_type_groups_get(self) -> operations.OwnerTypeGroupsGetResponse:
        r"""Returns a list of global Owner Type Groups. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ownerTypeGroups"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OwnerTypeGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultOwnerTypeGroupDto])
                res.page_result_owner_type_group_dto_ = out

        return res

    
    def owner_types_get(self) -> operations.OwnerTypesGetResponse:
        r"""Returns a list of global Owner Types. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/ownerTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.OwnerTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultOwnerTypeDto])
                res.page_result_owner_type_dto_ = out

        return res

    
    def payments_delete(self, request: operations.PaymentsDeleteRequest) -> operations.PaymentsDeleteResponse:
        r"""Removes an existing Payment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payments/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payments_delete_200_application_json_object = out

        return res

    
    def payments_get(self) -> operations.PaymentsGetResponse:
        r"""Returns a list of company's Payments. Supports OData querying protocol.
        Filtering is allowed by \"entryDate\" field.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payments"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultPaymentQueryDto])
                res.page_result_payment_query_dto_ = out

        return res

    
    def payments_post(self, request: operations.PaymentsPostRequest) -> operations.PaymentsPostResponse:
        r"""Creates a new Payment.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payments_post_200_application_json_object = out

        return res

    
    def payments_process_batch(self, request: operations.PaymentsProcessBatchRequest) -> operations.PaymentsProcessBatchResponse:
        r"""Processes a batch of Payments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payments/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payments_process_batch_200_application_json_object = out

        return res

    
    def payments_put(self, request: operations.PaymentsPutRequest) -> operations.PaymentsPutResponse:
        r"""Updates an existing Payment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payments/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.payments_put_200_application_json_object = out

        return res

    
    def products_delete(self, request: operations.ProductsDeleteRequest) -> operations.ProductsDeleteResponse:
        r"""Removes an existing Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.products_delete_200_application_json_object = out

        return res

    
    def products_get(self) -> operations.ProductsGetResponse:
        r"""Returns a list of company's Products. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" and \"stockCode\" fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/products"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultProductDto])
                res.page_result_product_dto_ = out

        return res

    
    def products_post(self, request: operations.ProductsPostRequest) -> operations.ProductsPostResponse:
        r"""Creates a new Product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/products"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.products_post_200_application_json_object = out

        return res

    
    def products_process_batch(self, request: operations.ProductsProcessBatchRequest) -> operations.ProductsProcessBatchResponse:
        r"""Processes a batch of Products.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/products/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.products_process_batch_200_application_json_object = out

        return res

    
    def products_put(self, request: operations.ProductsPutRequest) -> operations.ProductsPutResponse:
        r"""Updates an existing Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.products_put_200_application_json_object = out

        return res

    
    def purchases_delete(self, request: operations.PurchasesDeleteRequest) -> operations.PurchasesDeleteResponse:
        r"""Removes an existing Purchase.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/purchases/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PurchasesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.purchases_delete_200_application_json_object = out

        return res

    
    def purchases_get(self) -> operations.PurchasesGetResponse:
        r"""Returns a list of company's Purchases. Supports OData querying protocol.
        Filtering is allowed by \"entryDate\" field.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/purchases"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PurchasesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultPurchaseQueryDto])
                res.page_result_purchase_query_dto_ = out

        return res

    
    def purchases_post(self, request: operations.PurchasesPostRequest) -> operations.PurchasesPostResponse:
        r"""Creates a new Purchase.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/purchases"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PurchasesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.purchases_post_200_application_json_object = out

        return res

    
    def purchases_process_batch(self, request: operations.PurchasesProcessBatchRequest) -> operations.PurchasesProcessBatchResponse:
        r"""Processes a batch of Purchases.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/purchases/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PurchasesProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.purchases_process_batch_200_application_json_object = out

        return res

    
    def purchases_put(self, request: operations.PurchasesPutRequest) -> operations.PurchasesPutResponse:
        r"""Updates an existing Purchase.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/purchases/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PurchasesPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.purchases_put_200_application_json_object = out

        return res

    
    def quote_close(self, request: operations.QuoteCloseRequest) -> operations.QuoteCloseResponse:
        r"""Close a Quote.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/quotes/close/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.QuoteCloseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.quote_close_200_application_json_object = out

        return res

    
    def quote_delete(self, request: operations.QuoteDeleteRequest) -> operations.QuoteDeleteResponse:
        r"""Removes an existing Quote.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/quotes/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.QuoteDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.quote_delete_200_application_json_object = out

        return res

    
    def quote_get(self) -> operations.QuoteGetResponse:
        r"""Returns a list of company's Quotes.
        Filtering is forbidden.
        Ordering is allowed by \"id\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/quotes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.QuoteGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultQuoteDto])
                res.page_result_quote_dto_ = out

        return res

    
    def quote_post(self, request: operations.QuotePostRequest) -> operations.QuotePostResponse:
        r"""Creates a new Quote.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/quotes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuotePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.quote_post_200_application_json_object = out

        return res

    
    def quote_post_create_quote_with_generating_reference(self, request: operations.QuotePostCreateQuoteWithGeneratingReferenceRequest) -> operations.QuotePostCreateQuoteWithGeneratingReferenceResponse:
        r"""Creates a new Quote with auto generating reference.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/quotes/createQuoteWithGeneratingReference"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuotePostCreateQuoteWithGeneratingReferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.quote_post_create_quote_with_generating_reference_200_application_json_object = out

        return res

    
    def quote_post_generate_sale_invoice(self, request: operations.QuotePostGenerateSaleInvoiceRequest) -> operations.QuotePostGenerateSaleInvoiceResponse:
        r"""Generate a sale invoice from a Quote.
        When sale invoice is empty, new sale invoice will be generated from Quote.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/quotes/generateSaleInvoice"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuotePostGenerateSaleInvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.quote_post_generate_sale_invoice_200_application_json_object = out

        return res

    
    def quote_process_batch(self, request: operations.QuoteProcessBatchRequest) -> operations.QuoteProcessBatchResponse:
        r"""Processes a batch of Quote.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/quotes/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuoteProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.quote_process_batch_200_application_json_object = out

        return res

    
    def quote_put(self, request: operations.QuotePutRequest) -> operations.QuotePutResponse:
        r"""Updates an existing Quote.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/quotes/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuotePutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.quote_put_200_application_json_object = out

        return res

    
    def quote_reopen(self, request: operations.QuoteReopenRequest) -> operations.QuoteReopenResponse:
        r"""Reopen a Quote.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/quotes/reopen/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.QuoteReopenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.quote_reopen_200_application_json_object = out

        return res

    
    def sales_credit_notes_delete(self, request: operations.SalesCreditNotesDeleteRequest) -> operations.SalesCreditNotesDeleteResponse:
        r"""Removes an existing Sales Credit Note.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesCreditNotes/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesCreditNotesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_credit_notes_delete_200_application_json_object = out

        return res

    
    def sales_credit_notes_get(self) -> operations.SalesCreditNotesGetResponse:
        r"""Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
        Filtering is allowed by \"entryDate\" field.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesCreditNotes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesCreditNotesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultSalesCreditNoteQueryDto])
                res.page_result_sales_credit_note_query_dto_ = out

        return res

    
    def sales_credit_notes_post(self, request: operations.SalesCreditNotesPostRequest) -> operations.SalesCreditNotesPostResponse:
        r"""Creates a new Sales Credit Note.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesCreditNotes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesCreditNotesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_credit_notes_post_200_application_json_object = out

        return res

    
    def sales_credit_notes_process_batch(self, request: operations.SalesCreditNotesProcessBatchRequest) -> operations.SalesCreditNotesProcessBatchResponse:
        r"""Processes a batch of Sales Credit Notes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesCreditNotes/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesCreditNotesProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_credit_notes_process_batch_200_application_json_object = out

        return res

    
    def sales_credit_notes_put(self, request: operations.SalesCreditNotesPutRequest) -> operations.SalesCreditNotesPutResponse:
        r"""Updates an existing Sales Credit Note.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesCreditNotes/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesCreditNotesPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_credit_notes_put_200_application_json_object = out

        return res

    
    def sales_entries_delete(self, request: operations.SalesEntriesDeleteRequest) -> operations.SalesEntriesDeleteResponse:
        r"""Removes an existing Sales Entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesEntries/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesEntriesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_entries_delete_200_application_json_object = out

        return res

    
    def sales_entries_get(self) -> operations.SalesEntriesGetResponse:
        r"""Returns a list of company's Sales Entries. Supports OData querying protocol.
        Filtering is allowed by \"entryDate\" field.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesEntries"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesEntriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultSalesEntryQueryDto])
                res.page_result_sales_entry_query_dto_ = out

        return res

    
    def sales_entries_post(self, request: operations.SalesEntriesPostRequest) -> operations.SalesEntriesPostResponse:
        r"""Creates a new Sales Entry.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesEntries"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesEntriesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_entries_post_200_application_json_object = out

        return res

    
    def sales_entries_process_batch(self, request: operations.SalesEntriesProcessBatchRequest) -> operations.SalesEntriesProcessBatchResponse:
        r"""Processes a batch of Sales Entries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesEntries/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesEntriesProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_entries_process_batch_200_application_json_object = out

        return res

    
    def sales_entries_put(self, request: operations.SalesEntriesPutRequest) -> operations.SalesEntriesPutResponse:
        r"""Updates an existing Sales Entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesEntries/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesEntriesPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_entries_put_200_application_json_object = out

        return res

    
    def sales_invoices_delete(self, request: operations.SalesInvoicesDeleteRequest) -> operations.SalesInvoicesDeleteResponse:
        r"""Removes an existing Sales Invoice.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesInvoices/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesInvoicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_invoices_delete_200_application_json_object = out

        return res

    
    def sales_invoices_get(self) -> operations.SalesInvoicesGetResponse:
        r"""Returns a list of company's Sales Invoices. Supports OData querying protocol.
        Filtering is allowed by \"entryDate\" field.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesInvoices"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesInvoicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultSalesInvoiceQueryDto])
                res.page_result_sales_invoice_query_dto_ = out

        return res

    
    def sales_invoices_post(self, request: operations.SalesInvoicesPostRequest) -> operations.SalesInvoicesPostResponse:
        r"""Creates a new Sales Invoice.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesInvoices"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesInvoicesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_invoices_post_200_application_json_object = out

        return res

    
    def sales_invoices_post_create_sale_invoice_with_generating_reference(self, request: operations.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceRequest) -> operations.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse:
        r"""Creates a new Sale Invoice with auto generating reference.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesInvoices/createSaleInvoiceWithGeneratingReference"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_invoices_post_create_sale_invoice_with_generating_reference_200_application_json_object = out

        return res

    
    def sales_invoices_process_batch(self, request: operations.SalesInvoicesProcessBatchRequest) -> operations.SalesInvoicesProcessBatchResponse:
        r"""Processes a batch of Sales Invoices.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesInvoices/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesInvoicesProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_invoices_process_batch_200_application_json_object = out

        return res

    
    def sales_invoices_put(self, request: operations.SalesInvoicesPutRequest) -> operations.SalesInvoicesPutResponse:
        r"""Updates an existing Sales Invoice.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesInvoices/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesInvoicesPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_invoices_put_200_application_json_object = out

        return res

    
    def sales_rep_delete(self, request: operations.SalesRepDeleteRequest) -> operations.SalesRepDeleteResponse:
        r"""Removes an existing Sale Rep.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesReps/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesRepDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_rep_delete_200_application_json_object = out

        return res

    
    def sales_rep_get(self) -> operations.SalesRepGetResponse:
        r"""Returns a list of company's SaleRep.
        Filtering is forbidden.
        Ordering is allowed by \"id\".
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesReps"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesRepGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultSaleRepsDto])
                res.page_result_sale_reps_dto_ = out

        return res

    
    def sales_rep_post(self, request: operations.SalesRepPostRequest) -> operations.SalesRepPostResponse:
        r"""Creates a new SaleRep.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesReps"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesRepPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_rep_post_200_application_json_object = out

        return res

    
    def sales_rep_process_batch(self, request: operations.SalesRepProcessBatchRequest) -> operations.SalesRepProcessBatchResponse:
        r"""Processes a batch of Sale Rep.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/salesReps/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesRepProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_rep_process_batch_200_application_json_object = out

        return res

    
    def sales_rep_put(self, request: operations.SalesRepPutRequest) -> operations.SalesRepPutResponse:
        r"""Updates an existing Sale Rep.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/salesReps/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesRepPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.sales_rep_put_200_application_json_object = out

        return res

    
    def sales_get(self) -> operations.SalesGetResponse:
        r"""Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol.
        Filtering is allowed by \"entryDate\" field.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/sales"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SalesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultSalesQueryDto])
                res.page_result_sales_query_dto_ = out

        return res

    
    def suppliers_delete(self, request: operations.SuppliersDeleteRequest) -> operations.SuppliersDeleteResponse:
        r"""Removes an existing Supplier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/suppliers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.suppliers_delete_200_application_json_object = out

        return res

    
    def suppliers_get(self) -> operations.SuppliersGetResponse:
        r"""Returns a list of company's Suppliers. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" and \"code\" fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/suppliers"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultSupplierQueryDto])
                res.page_result_supplier_query_dto_ = out

        return res

    
    def suppliers_get_account_trans(self, request: operations.SuppliersGetAccountTransRequest) -> operations.SuppliersGetAccountTransResponse:
        r"""Returns a list of Supplier's account transactions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/suppliers/{itemId}/accountTrans", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersGetAccountTransResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AccountTranDto]])
                res.account_tran_dtos = out

        return res

    
    def suppliers_get_opening_balance(self, request: operations.SuppliersGetOpeningBalanceRequest) -> operations.SuppliersGetOpeningBalanceResponse:
        r"""Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/suppliers/{itemId}/openingBalance", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersGetOpeningBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OwnerOpeningBalanceInPeriodsDto])
                res.owner_opening_balance_in_periods_dto = out

        return res

    
    def suppliers_get_opening_balance_list(self, request: operations.SuppliersGetOpeningBalanceListRequest) -> operations.SuppliersGetOpeningBalanceListResponse:
        r"""Returns a list of Supplier's opening balance transactions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/suppliers/{itemId}/openingBalanceList", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersGetOpeningBalanceListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OwnerOpeningBalanceDto]])
                res.owner_opening_balance_dtos = out

        return res

    
    def suppliers_post(self, request: operations.SuppliersPostRequest) -> operations.SuppliersPostResponse:
        r"""Creates a new Supplier.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/suppliers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.suppliers_post_200_application_json_object = out

        return res

    
    def suppliers_process_batch(self, request: operations.SuppliersProcessBatchRequest) -> operations.SuppliersProcessBatchResponse:
        r"""Processes a batch of Suppliers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/suppliers/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersProcessBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.suppliers_process_batch_200_application_json_object = out

        return res

    
    def suppliers_put(self, request: operations.SuppliersPutRequest) -> operations.SuppliersPutResponse:
        r"""Updates an existing Supplier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/suppliers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SuppliersPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.suppliers_put_200_application_json_object = out

        return res

    
    def user_defined_fields_get(self) -> operations.UserDefinedFieldsGetResponse:
        r"""Returns a list of company's User Defined Fields. Supports OData querying protocol.
        Filtering is allowed by \"categoryTypeId\" field.
        Ordering is allowed by \"id\" and \"orderIndex\" fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/userDefinedFields"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserDefinedFieldsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultUserDefinedFieldDto])
                res.page_result_user_defined_field_dto_ = out

        return res

    
    def vat_analysis_types_get(self) -> operations.VatAnalysisTypesGetResponse:
        r"""Returns a list of global Vat Analysis Types. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/vatAnalysisTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VatAnalysisTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultVatAnalysisTypeDto])
                res.page_result_vat_analysis_type_dto_ = out

        return res

    
    def vat_categories_get(self) -> operations.VatCategoriesGetResponse:
        r"""Returns a list of global Vat Categories. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/vatCategories"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VatCategoriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultVatCategoryDto])
                res.page_result_vat_category_dto_ = out

        return res

    
    def vat_categories_process_vat_rates(self, request: operations.VatCategoriesProcessVatRatesRequest) -> operations.VatCategoriesProcessVatRatesResponse:
        r"""Process Vat Rates
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/vatCategories/vatRates"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VatCategoriesProcessVatRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.vat_categories_process_vat_rates_200_application_json_object = out

        return res

    
    def vat_rates_get(self) -> operations.VatRatesGetResponse:
        r"""Returns a list of company's Vat Rates. Supports OData querying protocol.
        Filtering is allowed by \"vatCategoryId\" field.
        Ordering is allowed by \"id\" and \"orderIndex\" fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/vatRates"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VatRatesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultVatRateDto])
                res.page_result_vat_rate_dto_ = out

        return res

    
    def vat_types_get(self) -> operations.VatTypesGetResponse:
        r"""Returns a list of global Vat Types. Supports OData querying protocol.
        Filtering is forbidden.
        Ordering is allowed by \"id\" field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/vatTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VatTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageResultVatTypeDto])
                res.page_result_vat_type_dto_ = out

        return res

    