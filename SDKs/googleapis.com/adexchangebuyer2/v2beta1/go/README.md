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
    
    req := operations.Adexchangebuyer2AccountsClientsCreateRequest{
        Security: operations.Adexchangebuyer2AccountsClientsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.Adexchangebuyer2AccountsClientsCreatePathParams{
            AccountID: "ab",
        },
        QueryParams: operations.Adexchangebuyer2AccountsClientsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "non",
            Alt: "proto",
            Callback: "molestias",
            Fields: "possimus",
            Key: "non",
            OauthToken: "id",
            PrettyPrint: false,
            QuotaUser: "veritatis",
            UploadType: "sapiente",
            UploadProtocol: "ducimus",
        },
        Request: &shared.Client{
            ClientAccountID: "qui",
            ClientName: "dolore",
            EntityID: "explicabo",
            EntityName: "suscipit",
            EntityType: "AGENCY",
            PartnerClientID: "et",
            Role: "CLIENT_DEAL_VIEWER",
            Status: "ACTIVE",
            VisibleToSeller: true,
        },
    }
    
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `Adexchangebuyer2AccountsClientsCreate` - Creates a new client buyer.
* `Adexchangebuyer2AccountsClientsGet` - Gets a client buyer with a given client account ID.
* `Adexchangebuyer2AccountsClientsInvitationsCreate` - Creates and sends out an email invitation to access an Ad Exchange client buyer account.
* `Adexchangebuyer2AccountsClientsInvitationsGet` - Retrieves an existing client user invitation.
* `Adexchangebuyer2AccountsClientsInvitationsList` - Lists all the client users invitations for a client with a given account ID.
* `Adexchangebuyer2AccountsClientsList` - Lists all the clients for the current sponsor buyer.
* `Adexchangebuyer2AccountsClientsUpdate` - Updates an existing client buyer.
* `Adexchangebuyer2AccountsClientsUsersGet` - Retrieves an existing client user.
* `Adexchangebuyer2AccountsClientsUsersList` - Lists all the known client users for a specified sponsor buyer account ID.
* `Adexchangebuyer2AccountsClientsUsersUpdate` - Updates an existing client user. Only the user status can be changed on update.
* `Adexchangebuyer2AccountsCreativesCreate` - Creates a creative.
* `Adexchangebuyer2AccountsCreativesDealAssociationsAdd` - Associate an existing deal with a creative.
* `Adexchangebuyer2AccountsCreativesDealAssociationsList` - List all creative-deal associations.
* `Adexchangebuyer2AccountsCreativesDealAssociationsRemove` - Remove the association between a deal and a creative.
* `Adexchangebuyer2AccountsCreativesGet` - Gets a creative.
* `Adexchangebuyer2AccountsCreativesList` - Lists creatives.
* `Adexchangebuyer2AccountsCreativesStopWatching` - Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
* `Adexchangebuyer2AccountsCreativesUpdate` - Updates a creative.
* `Adexchangebuyer2AccountsCreativesWatch` - Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
* `Adexchangebuyer2AccountsFinalizedProposalsList` - List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
* `Adexchangebuyer2AccountsFinalizedProposalsPause` - Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* `Adexchangebuyer2AccountsFinalizedProposalsResume` - Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* `Adexchangebuyer2AccountsProductsGet` - Gets the requested product by ID.
* `Adexchangebuyer2AccountsProductsList` - List all products visible to the buyer (optionally filtered by the specified PQL query).
* `Adexchangebuyer2AccountsProposalsAccept` - Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
* `Adexchangebuyer2AccountsProposalsAddNote` - Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
* `Adexchangebuyer2AccountsProposalsCancelNegotiation` - Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
* `Adexchangebuyer2AccountsProposalsCompleteSetup` - You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
* `Adexchangebuyer2AccountsProposalsCreate` - Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
* `Adexchangebuyer2AccountsProposalsGet` - Gets a proposal given its ID. The proposal is returned at its head revision.
* `Adexchangebuyer2AccountsProposalsList` - List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
* `Adexchangebuyer2AccountsProposalsPause` - Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
* `Adexchangebuyer2AccountsProposalsResume` - Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
* `Adexchangebuyer2AccountsProposalsUpdate` - Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
* `Adexchangebuyer2AccountsPublisherProfilesGet` - Gets the requested publisher profile by id.
* `Adexchangebuyer2AccountsPublisherProfilesList` - List all publisher profiles visible to the buyer

### bidders

* `Adexchangebuyer2BiddersFilterSetsBidMetricsList` - Lists all metrics that are measured in terms of number of bids.
* `Adexchangebuyer2BiddersFilterSetsBidResponseErrorsList` - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
* `Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList` - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
* `Adexchangebuyer2BiddersFilterSetsCreate` - Creates the specified filter set for the account with the given account ID.
* `Adexchangebuyer2BiddersFilterSetsDelete` - Deletes the requested filter set from the account with the given account ID.
* `Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList` - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
* `Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList` - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
* `Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList` - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
* `Adexchangebuyer2BiddersFilterSetsFilteredBidsList` - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
* `Adexchangebuyer2BiddersFilterSetsGet` - Retrieves the requested filter set for the account with the given account ID.
* `Adexchangebuyer2BiddersFilterSetsImpressionMetricsList` - Lists all metrics that are measured in terms of number of impressions.
* `Adexchangebuyer2BiddersFilterSetsList` - Lists all filter sets for the account with the given account ID.
* `Adexchangebuyer2BiddersFilterSetsLosingBidsList` - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
* `Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList` - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
