import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def adexchangebuyer2_accounts_clients_create(self, request: operations.Adexchangebuyer2AccountsClientsCreateRequest) -> operations.Adexchangebuyer2AccountsClientsCreateResponse:
        r"""Creates a new client buyer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def adexchangebuyer2_accounts_clients_get(self, request: operations.Adexchangebuyer2AccountsClientsGetRequest) -> operations.Adexchangebuyer2AccountsClientsGetResponse:
        r"""Gets a client buyer with a given client account ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def adexchangebuyer2_accounts_clients_invitations_create(self, request: operations.Adexchangebuyer2AccountsClientsInvitationsCreateRequest) -> operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse:
        r"""Creates and sends out an email invitation to access an Ad Exchange client buyer account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUserInvitation])
                res.client_user_invitation = out

        return res

    
    def adexchangebuyer2_accounts_clients_invitations_get(self, request: operations.Adexchangebuyer2AccountsClientsInvitationsGetRequest) -> operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse:
        r"""Retrieves an existing client user invitation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUserInvitation])
                res.client_user_invitation = out

        return res

    
    def adexchangebuyer2_accounts_clients_invitations_list(self, request: operations.Adexchangebuyer2AccountsClientsInvitationsListRequest) -> operations.Adexchangebuyer2AccountsClientsInvitationsListResponse:
        r"""Lists all the client users invitations for a client with a given account ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsInvitationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientUserInvitationsResponse])
                res.list_client_user_invitations_response = out

        return res

    
    def adexchangebuyer2_accounts_clients_list(self, request: operations.Adexchangebuyer2AccountsClientsListRequest) -> operations.Adexchangebuyer2AccountsClientsListResponse:
        r"""Lists all the clients for the current sponsor buyer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientsResponse])
                res.list_clients_response = out

        return res

    
    def adexchangebuyer2_accounts_clients_update(self, request: operations.Adexchangebuyer2AccountsClientsUpdateRequest) -> operations.Adexchangebuyer2AccountsClientsUpdateResponse:
        r"""Updates an existing client buyer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def adexchangebuyer2_accounts_clients_users_get(self, request: operations.Adexchangebuyer2AccountsClientsUsersGetRequest) -> operations.Adexchangebuyer2AccountsClientsUsersGetResponse:
        r"""Retrieves an existing client user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsUsersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def adexchangebuyer2_accounts_clients_users_list(self, request: operations.Adexchangebuyer2AccountsClientsUsersListRequest) -> operations.Adexchangebuyer2AccountsClientsUsersListResponse:
        r"""Lists all the known client users for a specified sponsor buyer account ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsUsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientUsersResponse])
                res.list_client_users_response = out

        return res

    
    def adexchangebuyer2_accounts_clients_users_update(self, request: operations.Adexchangebuyer2AccountsClientsUsersUpdateRequest) -> operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse:
        r"""Updates an existing client user. Only the user status can be changed on update.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def adexchangebuyer2_accounts_creatives_create(self, request: operations.Adexchangebuyer2AccountsCreativesCreateRequest) -> operations.Adexchangebuyer2AccountsCreativesCreateResponse:
        r"""Creates a creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def adexchangebuyer2_accounts_creatives_deal_associations_add(self, request: operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest) -> operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse:
        r"""Associate an existing deal with a creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_accounts_creatives_deal_associations_list(self, request: operations.Adexchangebuyer2AccountsCreativesDealAssociationsListRequest) -> operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse:
        r"""List all creative-deal associations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDealAssociationsResponse])
                res.list_deal_associations_response = out

        return res

    
    def adexchangebuyer2_accounts_creatives_deal_associations_remove(self, request: operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest) -> operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse:
        r"""Remove the association between a deal and a creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_accounts_creatives_get(self, request: operations.Adexchangebuyer2AccountsCreativesGetRequest) -> operations.Adexchangebuyer2AccountsCreativesGetResponse:
        r"""Gets a creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def adexchangebuyer2_accounts_creatives_list(self, request: operations.Adexchangebuyer2AccountsCreativesListRequest) -> operations.Adexchangebuyer2AccountsCreativesListResponse:
        r"""Lists creatives.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCreativesResponse])
                res.list_creatives_response = out

        return res

    
    def adexchangebuyer2_accounts_creatives_stop_watching(self, request: operations.Adexchangebuyer2AccountsCreativesStopWatchingRequest) -> operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse:
        r"""Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_accounts_creatives_update(self, request: operations.Adexchangebuyer2AccountsCreativesUpdateRequest) -> operations.Adexchangebuyer2AccountsCreativesUpdateResponse:
        r"""Updates a creative.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Creative])
                res.creative = out

        return res

    
    def adexchangebuyer2_accounts_creatives_watch(self, request: operations.Adexchangebuyer2AccountsCreativesWatchRequest) -> operations.Adexchangebuyer2AccountsCreativesWatchResponse:
        r"""Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsCreativesWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def adexchangebuyer2_accounts_finalized_proposals_list(self, request: operations.Adexchangebuyer2AccountsFinalizedProposalsListRequest) -> operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse:
        r"""List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/finalizedProposals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProposalsResponse])
                res.list_proposals_response = out

        return res

    
    def adexchangebuyer2_accounts_finalized_proposals_pause(self, request: operations.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest) -> operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse:
        r"""Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_finalized_proposals_resume(self, request: operations.Adexchangebuyer2AccountsFinalizedProposalsResumeRequest) -> operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse:
        r"""Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_products_get(self, request: operations.Adexchangebuyer2AccountsProductsGetRequest) -> operations.Adexchangebuyer2AccountsProductsGetResponse:
        r"""Gets the requested product by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/products/{productId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProductsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out

        return res

    
    def adexchangebuyer2_accounts_products_list(self, request: operations.Adexchangebuyer2AccountsProductsListRequest) -> operations.Adexchangebuyer2AccountsProductsListResponse:
        r"""List all products visible to the buyer (optionally filtered by the specified PQL query).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/products", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProductsResponse])
                res.list_products_response = out

        return res

    
    def adexchangebuyer2_accounts_proposals_accept(self, request: operations.Adexchangebuyer2AccountsProposalsAcceptRequest) -> operations.Adexchangebuyer2AccountsProposalsAcceptResponse:
        r"""Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:accept", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_add_note(self, request: operations.Adexchangebuyer2AccountsProposalsAddNoteRequest) -> operations.Adexchangebuyer2AccountsProposalsAddNoteResponse:
        r"""Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsAddNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Note])
                res.note = out

        return res

    
    def adexchangebuyer2_accounts_proposals_cancel_negotiation(self, request: operations.Adexchangebuyer2AccountsProposalsCancelNegotiationRequest) -> operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse:
        r"""Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_complete_setup(self, request: operations.Adexchangebuyer2AccountsProposalsCompleteSetupRequest) -> operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse:
        r"""You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_create(self, request: operations.Adexchangebuyer2AccountsProposalsCreateRequest) -> operations.Adexchangebuyer2AccountsProposalsCreateResponse:
        r"""Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_get(self, request: operations.Adexchangebuyer2AccountsProposalsGetRequest) -> operations.Adexchangebuyer2AccountsProposalsGetResponse:
        r"""Gets a proposal given its ID. The proposal is returned at its head revision.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_list(self, request: operations.Adexchangebuyer2AccountsProposalsListRequest) -> operations.Adexchangebuyer2AccountsProposalsListResponse:
        r"""List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProposalsResponse])
                res.list_proposals_response = out

        return res

    
    def adexchangebuyer2_accounts_proposals_pause(self, request: operations.Adexchangebuyer2AccountsProposalsPauseRequest) -> operations.Adexchangebuyer2AccountsProposalsPauseResponse:
        r"""Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:pause", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_resume(self, request: operations.Adexchangebuyer2AccountsProposalsResumeRequest) -> operations.Adexchangebuyer2AccountsProposalsResumeResponse:
        r"""Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}:resume", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_proposals_update(self, request: operations.Adexchangebuyer2AccountsProposalsUpdateRequest) -> operations.Adexchangebuyer2AccountsProposalsUpdateResponse:
        r"""Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/proposals/{proposalId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsProposalsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def adexchangebuyer2_accounts_publisher_profiles_get(self, request: operations.Adexchangebuyer2AccountsPublisherProfilesGetRequest) -> operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse:
        r"""Gets the requested publisher profile by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublisherProfile])
                res.publisher_profile = out

        return res

    
    def adexchangebuyer2_accounts_publisher_profiles_list(self, request: operations.Adexchangebuyer2AccountsPublisherProfilesListRequest) -> operations.Adexchangebuyer2AccountsPublisherProfilesListResponse:
        r"""List all publisher profiles visible to the buyer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/accounts/{accountId}/publisherProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.Adexchangebuyer2AccountsPublisherProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPublisherProfilesResponse])
                res.list_publisher_profiles_response = out

        return res

    