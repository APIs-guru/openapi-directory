import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Buyers:
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

    
    def authorizedbuyersmarketplace_buyers_auction_packages_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse:
        r"""List the auction packages subscribed by a buyer and its clients.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/auctionPackages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAuctionPackagesResponse])
                res.list_auction_packages_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_auction_packages_subscribe(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse:
        r"""Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:subscribe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuctionPackage])
                res.auction_package = out

        return res

    
    def authorizedbuyersmarketplace_buyers_auction_packages_subscribe_clients(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse:
        r"""Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{auctionPackage}:subscribeClients", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuctionPackage])
                res.auction_package = out

        return res

    
    def authorizedbuyersmarketplace_buyers_auction_packages_unsubscribe(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse:
        r"""Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:unsubscribe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuctionPackage])
                res.auction_package = out

        return res

    
    def authorizedbuyersmarketplace_buyers_auction_packages_unsubscribe_clients(self, request: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest) -> operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse:
        r"""Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{auctionPackage}:unsubscribeClients", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuctionPackage])
                res.auction_package = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_create(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsCreateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse:
        r"""Creates a new client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/clients", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Client])
                res.client = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse:
        r"""Lists all the clients for the current buyer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/clients", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientsResponse])
                res.list_clients_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_activate(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse:
        r"""Activates an existing client user. The state of the client user will be updated from \"INACTIVE\" to \"ACTIVE\". This method has no effect if the client user is already in \"ACTIVE\" state. An error will be returned if the client user to activate is still in \"INVITED\" state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:activate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_create(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse:
        r"""Creates a new client user in \"INVITED\" state. An email invitation will be sent to the new user, once accepted the user will become active.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/users", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_deactivate(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse:
        r"""Deactivates an existing client user. The state of the client user will be updated from \"ACTIVE\" to \"INACTIVE\". This method has no effect if the client user is already in \"INACTIVE\" state. An error will be returned if the client user to deactivate is still in \"INVITED\" state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:deactivate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientUser])
                res.client_user = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_delete(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse:
        r"""Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def authorizedbuyersmarketplace_buyers_clients_users_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse:
        r"""Lists all client users for a specified client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClientUsersResponse])
                res.list_client_users_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_add_creative(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse:
        r"""Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{deal}:addCreative", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinalizedDeal])
                res.finalized_deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse:
        r"""Lists finalized deals. Use the URL path \"/v1/buyers/{accountId}/finalizedDeals\" to list finalized deals for the current buyer and its clients. Bidders can use the URL path \"/v1/bidders/{accountId}/finalizedDeals\" to list finalized deals for the bidder, its buyers and all their clients.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/finalizedDeals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFinalizedDealsResponse])
                res.list_finalized_deals_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_pause(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse:
        r"""Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:pause", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinalizedDeal])
                res.finalized_deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_resume(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse:
        r"""Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:resume", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinalizedDeal])
                res.finalized_deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_finalized_deals_set_ready_to_serve(self, request: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest) -> operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse:
        r"""Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{deal}:setReadyToServe", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FinalizedDeal])
                res.finalized_deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_accept(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse:
        r"""Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:accept", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_add_note(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse:
        r"""Creates a note for this proposal and sends to the seller.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{proposal}:addNote", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_cancel_negotiation(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse:
        r"""Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{proposal}:cancelNegotiation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_deals_batch_update(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse:
        r"""Batch updates multiple deals in the same proposal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/deals:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdateDealsResponse])
                res.batch_update_deals_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_deals_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse:
        r"""Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/deals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDealsResponse])
                res.list_deals_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_deals_patch(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse:
        r"""Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deal])
                res.deal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse:
        r"""Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/proposals", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProposalsResponse])
                res.list_proposals_response = out

        return res

    
    def authorizedbuyersmarketplace_buyers_proposals_send_rfp(self, request: operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest) -> operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse:
        r"""Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{buyer}/proposals:sendRfp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Proposal])
                res.proposal = out

        return res

    
    def authorizedbuyersmarketplace_buyers_publisher_profiles_get(self, request: operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest) -> operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse:
        r"""Gets the requested publisher profile by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublisherProfile])
                res.publisher_profile = out

        return res

    
    def authorizedbuyersmarketplace_buyers_publisher_profiles_list(self, request: operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest) -> operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse:
        r"""Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/publisherProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPublisherProfilesResponse])
                res.list_publisher_profiles_response = out

        return res

    