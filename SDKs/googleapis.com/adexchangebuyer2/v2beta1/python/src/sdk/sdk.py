import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://adexchangebuyer.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def adexchangebuyer2_accounts_clients_create(self, request: operations.Adexchangebuyer2AccountsClientsCreateRequest) -> operations.Adexchangebuyer2AccountsClientsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def adexchangebuyer2_accounts_clients_get(self, request: operations.Adexchangebuyer2AccountsClientsGetRequest) -> operations.Adexchangebuyer2AccountsClientsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def adexchangebuyer2_accounts_clients_invitations_create(self, request: operations.Adexchangebuyer2AccountsClientsInvitationsCreateRequest) -> operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUserInvitation])
                res.client_user_invitation = out

        return res

    
    def adexchangebuyer2_accounts_clients_invitations_get(self, request: operations.Adexchangebuyer2AccountsClientsInvitationsGetRequest) -> operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUserInvitation])
                res.client_user_invitation = out

        return res

    
    def adexchangebuyer2_accounts_clients_invitations_list(self, request: operations.Adexchangebuyer2AccountsClientsInvitationsListRequest) -> operations.Adexchangebuyer2AccountsClientsInvitationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsInvitationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientUserInvitationsResponse])
                res.list_client_user_invitations_response = out

        return res

    
    def adexchangebuyer2_accounts_clients_list(self, request: operations.Adexchangebuyer2AccountsClientsListRequest) -> operations.Adexchangebuyer2AccountsClientsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientsResponse])
                res.list_clients_response = out

        return res

    
    def adexchangebuyer2_accounts_clients_update(self, request: operations.Adexchangebuyer2AccountsClientsUpdateRequest) -> operations.Adexchangebuyer2AccountsClientsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def adexchangebuyer2_accounts_clients_users_get(self, request: operations.Adexchangebuyer2AccountsClientsUsersGetRequest) -> operations.Adexchangebuyer2AccountsClientsUsersGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsUsersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def adexchangebuyer2_accounts_clients_users_list(self, request: operations.Adexchangebuyer2AccountsClientsUsersListRequest) -> operations.Adexchangebuyer2AccountsClientsUsersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsUsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientUsersResponse])
                res.list_client_users_response = out

        return res

    
    def adexchangebuyer2_accounts_clients_users_update(self, request: operations.Adexchangebuyer2AccountsClientsUsersUpdateRequest) -> operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def adexchangebuyer2_accounts_creatives_create(self, request: operations.Adexchangebuyer2AccountsCreativesCreateRequest) -> operations.Adexchangebuyer2AccountsCreativesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def adexchangebuyer2_accounts_creatives_deal_associations_add(self, request: operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest) -> operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_accounts_creatives_deal_associations_list(self, request: operations.Adexchangebuyer2AccountsCreativesDealAssociationsListRequest) -> operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDealAssociationsResponse])
                res.list_deal_associations_response = out

        return res

    
    def adexchangebuyer2_accounts_creatives_deal_associations_remove(self, request: operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest) -> operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_accounts_creatives_get(self, request: operations.Adexchangebuyer2AccountsCreativesGetRequest) -> operations.Adexchangebuyer2AccountsCreativesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def adexchangebuyer2_accounts_creatives_list(self, request: operations.Adexchangebuyer2AccountsCreativesListRequest) -> operations.Adexchangebuyer2AccountsCreativesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativesResponse])
                res.list_creatives_response = out

        return res

    
    def adexchangebuyer2_accounts_creatives_stop_watching(self, request: operations.Adexchangebuyer2AccountsCreativesStopWatchingRequest) -> operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_accounts_creatives_update(self, request: operations.Adexchangebuyer2AccountsCreativesUpdateRequest) -> operations.Adexchangebuyer2AccountsCreativesUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def adexchangebuyer2_accounts_creatives_watch(self, request: operations.Adexchangebuyer2AccountsCreativesWatchRequest) -> operations.Adexchangebuyer2AccountsCreativesWatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_accounts_finalized_proposals_list(self, request: operations.Adexchangebuyer2AccountsFinalizedProposalsListRequest) -> operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/finalizedProposals", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProposalsResponse])
                res.list_proposals_response = out

        return res

    
    def adexchangebuyer2_accounts_finalized_proposals_pause(self, request: operations.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest) -> operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_finalized_proposals_resume(self, request: operations.Adexchangebuyer2AccountsFinalizedProposalsResumeRequest) -> operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_products_get(self, request: operations.Adexchangebuyer2AccountsProductsGetRequest) -> operations.Adexchangebuyer2AccountsProductsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/products/{productId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProductsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out

        return res

    
    def adexchangebuyer2_accounts_products_list(self, request: operations.Adexchangebuyer2AccountsProductsListRequest) -> operations.Adexchangebuyer2AccountsProductsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/products", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProductsResponse])
                res.list_products_response = out

        return res

    
    def adexchangebuyer2_accounts_proposals_accept(self, request: operations.Adexchangebuyer2AccountsProposalsAcceptRequest) -> operations.Adexchangebuyer2AccountsProposalsAcceptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:accept", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_add_note(self, request: operations.Adexchangebuyer2AccountsProposalsAddNoteRequest) -> operations.Adexchangebuyer2AccountsProposalsAddNoteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsAddNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Note])
                res.note = out

        return res

    
    def adexchangebuyer2_accounts_proposals_cancel_negotiation(self, request: operations.Adexchangebuyer2AccountsProposalsCancelNegotiationRequest) -> operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_complete_setup(self, request: operations.Adexchangebuyer2AccountsProposalsCompleteSetupRequest) -> operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_create(self, request: operations.Adexchangebuyer2AccountsProposalsCreateRequest) -> operations.Adexchangebuyer2AccountsProposalsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_get(self, request: operations.Adexchangebuyer2AccountsProposalsGetRequest) -> operations.Adexchangebuyer2AccountsProposalsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_list(self, request: operations.Adexchangebuyer2AccountsProposalsListRequest) -> operations.Adexchangebuyer2AccountsProposalsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProposalsResponse])
                res.list_proposals_response = out

        return res

    
    def adexchangebuyer2_accounts_proposals_pause(self, request: operations.Adexchangebuyer2AccountsProposalsPauseRequest) -> operations.Adexchangebuyer2AccountsProposalsPauseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:pause", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_resume(self, request: operations.Adexchangebuyer2AccountsProposalsResumeRequest) -> operations.Adexchangebuyer2AccountsProposalsResumeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:resume", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_update(self, request: operations.Adexchangebuyer2AccountsProposalsUpdateRequest) -> operations.Adexchangebuyer2AccountsProposalsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_publisher_profiles_get(self, request: operations.Adexchangebuyer2AccountsPublisherProfilesGetRequest) -> operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublisherProfile])
                res.publisher_profile = out

        return res

    
    def adexchangebuyer2_accounts_publisher_profiles_list(self, request: operations.Adexchangebuyer2AccountsPublisherProfilesListRequest) -> operations.Adexchangebuyer2AccountsPublisherProfilesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/publisherProfiles", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsPublisherProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPublisherProfilesResponse])
                res.list_publisher_profiles_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_bid_metrics_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/bidMetrics", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBidMetricsResponse])
                res.list_bid_metrics_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_bid_response_errors_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/bidResponseErrors", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBidResponseErrorsResponse])
                res.list_bid_response_errors_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_bid_responses_without_bids_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/bidResponsesWithoutBids", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBidResponsesWithoutBidsResponse])
                res.list_bid_responses_without_bids_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_create(self, request: operations.Adexchangebuyer2BiddersFilterSetsCreateRequest) -> operations.Adexchangebuyer2BiddersFilterSetsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{ownerName}/filterSets", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilterSet])
                res.filter_set = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_delete(self, request: operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest) -> operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_filtered_bid_requests_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/filteredBidRequests", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFilteredBidRequestsResponse])
                res.list_filtered_bid_requests_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_filtered_bids_creatives_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativeStatusBreakdownByCreativeResponse])
                res.list_creative_status_breakdown_by_creative_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_filtered_bids_details_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativeStatusBreakdownByDetailResponse])
                res.list_creative_status_breakdown_by_detail_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_filtered_bids_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/filteredBids", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFilteredBidsResponse])
                res.list_filtered_bids_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_get(self, request: operations.Adexchangebuyer2BiddersFilterSetsGetRequest) -> operations.Adexchangebuyer2BiddersFilterSetsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FilterSet])
                res.filter_set = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_impression_metrics_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/impressionMetrics", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListImpressionMetricsResponse])
                res.list_impression_metrics_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{ownerName}/filterSets", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFilterSetsResponse])
                res.list_filter_sets_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_losing_bids_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/losingBids", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLosingBidsResponse])
                res.list_losing_bids_response = out

        return res

    
    def adexchangebuyer2_bidders_filter_sets_non_billable_winning_bids_list(self, request: operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest) -> operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{filterSetName}/nonBillableWinningBids", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNonBillableWinningBidsResponse])
                res.list_non_billable_winning_bids_response = out

        return res

    