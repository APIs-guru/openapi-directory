import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Customers:
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

    
    def admin_customers_chrome_print_servers_batch_create_print_servers(self, request: operations.AdminCustomersChromePrintServersBatchCreatePrintServersRequest) -> operations.AdminCustomersChromePrintServersBatchCreatePrintServersResponse:
        r"""Creates multiple print servers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printServers:batchCreatePrintServers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintServersBatchCreatePrintServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchCreatePrintServersResponse])
                res.batch_create_print_servers_response = out

        return res

    
    def admin_customers_chrome_print_servers_batch_delete_print_servers(self, request: operations.AdminCustomersChromePrintServersBatchDeletePrintServersRequest) -> operations.AdminCustomersChromePrintServersBatchDeletePrintServersResponse:
        r"""Deletes multiple print servers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printServers:batchDeletePrintServers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintServersBatchDeletePrintServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchDeletePrintServersResponse])
                res.batch_delete_print_servers_response = out

        return res

    
    def admin_customers_chrome_print_servers_create(self, request: operations.AdminCustomersChromePrintServersCreateRequest) -> operations.AdminCustomersChromePrintServersCreateResponse:
        r"""Creates a print server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printServers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintServersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrintServer])
                res.print_server = out

        return res

    
    def admin_customers_chrome_print_servers_delete(self, request: operations.AdminCustomersChromePrintServersDeleteRequest) -> operations.AdminCustomersChromePrintServersDeleteResponse:
        r"""Deletes a print server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintServersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def admin_customers_chrome_print_servers_get(self, request: operations.AdminCustomersChromePrintServersGetRequest) -> operations.AdminCustomersChromePrintServersGetResponse:
        r"""Returns a print server's configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintServersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrintServer])
                res.print_server = out

        return res

    
    def admin_customers_chrome_print_servers_list(self, request: operations.AdminCustomersChromePrintServersListRequest) -> operations.AdminCustomersChromePrintServersListResponse:
        r"""Lists print server configurations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printServers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintServersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPrintServersResponse])
                res.list_print_servers_response = out

        return res

    
    def admin_customers_chrome_print_servers_patch(self, request: operations.AdminCustomersChromePrintServersPatchRequest) -> operations.AdminCustomersChromePrintServersPatchResponse:
        r"""Updates a print server's configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintServersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrintServer])
                res.print_server = out

        return res

    
    def admin_customers_chrome_printers_batch_create_printers(self, request: operations.AdminCustomersChromePrintersBatchCreatePrintersRequest) -> operations.AdminCustomersChromePrintersBatchCreatePrintersResponse:
        r"""Creates printers under given Organization Unit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printers:batchCreatePrinters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintersBatchCreatePrintersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchCreatePrintersResponse])
                res.batch_create_printers_response = out

        return res

    
    def admin_customers_chrome_printers_batch_delete_printers(self, request: operations.AdminCustomersChromePrintersBatchDeletePrintersRequest) -> operations.AdminCustomersChromePrintersBatchDeletePrintersResponse:
        r"""Deletes printers in batch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printers:batchDeletePrinters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintersBatchDeletePrintersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchDeletePrintersResponse])
                res.batch_delete_printers_response = out

        return res

    
    def admin_customers_chrome_printers_create(self, request: operations.AdminCustomersChromePrintersCreateRequest) -> operations.AdminCustomersChromePrintersCreateResponse:
        r"""Creates a printer under given Organization Unit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Printer])
                res.printer = out

        return res

    
    def admin_customers_chrome_printers_list(self, request: operations.AdminCustomersChromePrintersListRequest) -> operations.AdminCustomersChromePrintersListResponse:
        r"""List printers configs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPrintersResponse])
                res.list_printers_response = out

        return res

    
    def admin_customers_chrome_printers_list_printer_models(self, request: operations.AdminCustomersChromePrintersListPrinterModelsRequest) -> operations.AdminCustomersChromePrintersListPrinterModelsResponse:
        r"""Lists the supported printer models.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/{parent}/chrome/printers:listPrinterModels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdminCustomersChromePrintersListPrinterModelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPrinterModelsResponse])
                res.list_printer_models_response = out

        return res

    
    def directory_customers_get(self, request: operations.DirectoryCustomersGetRequest) -> operations.DirectoryCustomersGetResponse:
        r"""Retrieves a customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customers/{customerKey}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryCustomersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Customer])
                res.customer = out

        return res

    
    def directory_customers_patch(self, request: operations.DirectoryCustomersPatchRequest) -> operations.DirectoryCustomersPatchResponse:
        r"""Patches a customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customers/{customerKey}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryCustomersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Customer])
                res.customer = out

        return res

    
    def directory_customers_update(self, request: operations.DirectoryCustomersUpdateRequest) -> operations.DirectoryCustomersUpdateResponse:
        r"""Updates a customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customers/{customerKey}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryCustomersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Customer])
                res.customer = out

        return res

    