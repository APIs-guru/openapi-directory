# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest{
        Security: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListPathParams{
            Parent: "quo",
        },
        QueryParams: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListQueryParams{
            DollarXgafv: "1",
            AccessToken: "totam",
            Alt: "media",
            Callback: "sunt",
            Fields: "enim",
            Key: "qui",
            OauthToken: "deleniti",
            PageSize: 5518598320821928085,
            PageToken: "est",
            PrettyPrint: true,
            QuotaUser: "tenetur",
            UploadType: "cumque",
            UploadProtocol: "reprehenderit",
        },
    }
    
    res, err := s.Buyers.AuthorizedbuyersmarketplaceBuyersAuctionPackagesList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuctionPackagesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### buyers

* `AuthorizedbuyersmarketplaceBuyersAuctionPackagesList` - List the auction packages subscribed by a buyer and its clients.
* `AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe` - Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
* `AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients` - Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
* `AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe` - Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
* `AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients` - Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
* `AuthorizedbuyersmarketplaceBuyersClientsCreate` - Creates a new client.
* `AuthorizedbuyersmarketplaceBuyersClientsList` - Lists all the clients for the current buyer.
* `AuthorizedbuyersmarketplaceBuyersClientsUsersActivate` - Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.
* `AuthorizedbuyersmarketplaceBuyersClientsUsersCreate` - Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.
* `AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivate` - Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.
* `AuthorizedbuyersmarketplaceBuyersClientsUsersDelete` - Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
* `AuthorizedbuyersmarketplaceBuyersClientsUsersList` - Lists all client users for a specified client.
* `AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative` - Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
* `AuthorizedbuyersmarketplaceBuyersFinalizedDealsList` - Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
* `AuthorizedbuyersmarketplaceBuyersFinalizedDealsPause` - Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.
* `AuthorizedbuyersmarketplaceBuyersFinalizedDealsResume` - Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.
* `AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe` - Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
* `AuthorizedbuyersmarketplaceBuyersProposalsAccept` - Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
* `AuthorizedbuyersmarketplaceBuyersProposalsAddNote` - Creates a note for this proposal and sends to the seller.
* `AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiation` - Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
* `AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate` - Batch updates multiple deals in the same proposal.
* `AuthorizedbuyersmarketplaceBuyersProposalsDealsList` - Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
* `AuthorizedbuyersmarketplaceBuyersProposalsDealsPatch` - Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
* `AuthorizedbuyersmarketplaceBuyersProposalsList` - Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.
* `AuthorizedbuyersmarketplaceBuyersProposalsSendRfp` - Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
* `AuthorizedbuyersmarketplaceBuyersPublisherProfilesGet` - Gets the requested publisher profile by name.
* `AuthorizedbuyersmarketplaceBuyersPublisherProfilesList` - Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
