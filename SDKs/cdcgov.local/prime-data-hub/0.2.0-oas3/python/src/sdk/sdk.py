

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://cdcgov.local",
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
        
    
    
    
    def delete_settings_organizations_organization_name_(self, request: operations.DeleteSettingsOrganizationsOrganizationNameRequest) -> operations.DeleteSettingsOrganizationsOrganizationNameResponse:
        r"""Delete an organization (and the associated receivers and senders)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSettingsOrganizationsOrganizationNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def delete_settings_organizations_organization_name_receivers_receiver_name_(self, request: operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest) -> operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse:
        r"""Delete a receiver
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}/receivers/{receiverName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Receiver])
                res.receiver = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def delete_settings_organizations_organization_name_senders_sender_name_(self, request: operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest) -> operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
        r"""Delete a sender
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}/senders/{senderName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Sender])
                res.sender = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_settings_organizations(self, request: operations.GetSettingsOrganizationsRequest) -> operations.GetSettingsOrganizationsResponse:
        r"""The settings for all organizations of the system. Must have admin access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/settings/organizations"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Organization]])
                res.organizations = out

        return res

    
    def get_settings_organizations_organization_name_(self, request: operations.GetSettingsOrganizationsOrganizationNameRequest) -> operations.GetSettingsOrganizationsOrganizationNameResponse:
        r"""A single organization settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsOrganizationsOrganizationNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out

        return res

    
    def get_settings_organizations_organization_name_receivers(self, request: operations.GetSettingsOrganizationsOrganizationNameReceiversRequest) -> operations.GetSettingsOrganizationsOrganizationNameReceiversResponse:
        r"""A list of receivers and their current settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}/receivers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsOrganizationsOrganizationNameReceiversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Receiver]])
                res.receivers = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_settings_organizations_organization_name_receivers_receiver_name_(self, request: operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest) -> operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse:
        r"""The settings of a single of receiver
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}/receivers/{receiverName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Receiver])
                res.receiver = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_settings_organizations_organization_name_senders(self, request: operations.GetSettingsOrganizationsOrganizationNameSendersRequest) -> operations.GetSettingsOrganizationsOrganizationNameSendersResponse:
        r"""A list of senders
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}/senders", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsOrganizationsOrganizationNameSendersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Sender]])
                res.senders = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_settings_organizations_organization_name_senders_sender_name_(self, request: operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest) -> operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
        r"""The settings of a single of sender
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}/senders/{senderName}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Sender])
                res.sender = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def head_settings_organizations(self, request: operations.HeadSettingsOrganizationsRequest) -> operations.HeadSettingsOrganizationsResponse:
        r"""Retrived the last modified for all settings of the system. Must have admin access.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/settings/organizations"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadSettingsOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            

        return res

    
    def post_reports(self, request: operations.PostReportsRequest) -> operations.PostReportsResponse:
        r"""Post a report to the data hub
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/reports"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Report])
                res.report = out
        elif r.status_code == 500:
            pass

        return res

    
    def put_settings_organizations_organization_name_(self, request: operations.PutSettingsOrganizationsOrganizationNameRequest) -> operations.PutSettingsOrganizationsOrganizationNameResponse:
        r"""Create or update the direct settings associated with an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSettingsOrganizationsOrganizationNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def put_settings_organizations_organization_name_receivers_receiver_name_(self, request: operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest) -> operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse:
        r"""Update a single reciever
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}/receivers/{receiverName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Receiver])
                res.receiver = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Receiver])
                res.receiver = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def put_settings_organizations_organization_name_senders_sender_name_(self, request: operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest) -> operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse:
        r"""Update a single sender
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/settings/organizations/{organizationName}/senders/{senderName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Sender]])
                res.senders = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Sender]])
                res.senders = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    