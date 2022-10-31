import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://authorizedbuyersmarketplace.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def authorizedbuyersmarketplace_buyers_auction_packages_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/auctionPackages", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAuctionPackagesResponse])
                res.list_auction_packages_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_auction_packages_subscribe(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:subscribe", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuctionPackage])
                res.auction_package = out

        return res

    
    def authorizedbuyersmarketplace_buyers_auction_packages_subscribe_clients(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{auctionPackage}:subscribeClients", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuctionPackage])
                res.auction_package = out

        return res

    
    def authorizedbuyersmarketplace_buyers_auction_packages_unsubscribe(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:unsubscribe", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuctionPackage])
                res.auction_package = out

        return res

    
    def authorizedbuyersmarketplace_buyers_auction_packages_unsubscribe_clients(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{auctionPackage}:unsubscribeClients", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuctionPackage])
                res.auction_package = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_create(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsCreateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/clients", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/clients", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientsResponse])
                res.list_clients_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_activate(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:activate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_create(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/users", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_deactivate(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:deactivate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_delete(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/users", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientUsersResponse])
                res.list_client_users_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_add_creative(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{deal}:addCreative", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinalizedDeal])
                res.finalized_deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/finalizedDeals", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFinalizedDealsResponse])
                res.list_finalized_deals_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_pause(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:pause", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinalizedDeal])
                res.finalized_deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_resume(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:resume", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinalizedDeal])
                res.finalized_deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_set_ready_to_serve(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{deal}:setReadyToServe", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinalizedDeal])
                res.finalized_deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_accept(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:accept", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_add_note(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{proposal}:addNote", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_cancel_negotiation(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{proposal}:cancelNegotiation", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_deals_batch_update(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/deals:batchUpdate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateDealsResponse])
                res.batch_update_deals_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_deals_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/deals", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDealsResponse])
                res.list_deals_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_deals_patch(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deal])
                res.deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/proposals", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProposalsResponse])
                res.list_proposals_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_send_rfp(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{buyer}/proposals:sendRfp", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_publisher_profiles_get(self, request: operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest) -> operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublisherProfile])
                res.publisher_profile = out

        return res

    
    def authorizedbuyersmarketplace_buyers_publisher_profiles_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/publisherProfiles", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPublisherProfilesResponse])
                res.list_publisher_profiles_response = out

        return res

    