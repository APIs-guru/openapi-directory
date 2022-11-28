# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { Adexchangebuyer2AccountsClientsCreateRequest, Adexchangebuyer2AccountsClientsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: Adexchangebuyer2AccountsClientsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    accountId: "ab",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "non",
    alt: "proto",
    callback: "molestias",
    fields: "possimus",
    key: "non",
    oauthToken: "id",
    prettyPrint: false,
    quotaUser: "veritatis",
    uploadType: "sapiente",
    uploadProtocol: "ducimus",
  },
  request: {
    clientAccountId: "qui",
    clientName: "dolore",
    entityId: "explicabo",
    entityName: "suscipit",
    entityType: "AGENCY",
    partnerClientId: "et",
    role: "CLIENT_DEAL_VIEWER",
    status: "ACTIVE",
    visibleToSeller: true,
  },
};

sdk.accounts.adexchangebuyer2AccountsClientsCreate(req).then((res: Adexchangebuyer2AccountsClientsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `adexchangebuyer2AccountsClientsCreate` - Creates a new client buyer.
* `adexchangebuyer2AccountsClientsGet` - Gets a client buyer with a given client account ID.
* `adexchangebuyer2AccountsClientsInvitationsCreate` - Creates and sends out an email invitation to access an Ad Exchange client buyer account.
* `adexchangebuyer2AccountsClientsInvitationsGet` - Retrieves an existing client user invitation.
* `adexchangebuyer2AccountsClientsInvitationsList` - Lists all the client users invitations for a client with a given account ID.
* `adexchangebuyer2AccountsClientsList` - Lists all the clients for the current sponsor buyer.
* `adexchangebuyer2AccountsClientsUpdate` - Updates an existing client buyer.
* `adexchangebuyer2AccountsClientsUsersGet` - Retrieves an existing client user.
* `adexchangebuyer2AccountsClientsUsersList` - Lists all the known client users for a specified sponsor buyer account ID.
* `adexchangebuyer2AccountsClientsUsersUpdate` - Updates an existing client user. Only the user status can be changed on update.
* `adexchangebuyer2AccountsCreativesCreate` - Creates a creative.
* `adexchangebuyer2AccountsCreativesDealAssociationsAdd` - Associate an existing deal with a creative.
* `adexchangebuyer2AccountsCreativesDealAssociationsList` - List all creative-deal associations.
* `adexchangebuyer2AccountsCreativesDealAssociationsRemove` - Remove the association between a deal and a creative.
* `adexchangebuyer2AccountsCreativesGet` - Gets a creative.
* `adexchangebuyer2AccountsCreativesList` - Lists creatives.
* `adexchangebuyer2AccountsCreativesStopWatching` - Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
* `adexchangebuyer2AccountsCreativesUpdate` - Updates a creative.
* `adexchangebuyer2AccountsCreativesWatch` - Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
* `adexchangebuyer2AccountsFinalizedProposalsList` - List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
* `adexchangebuyer2AccountsFinalizedProposalsPause` - Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* `adexchangebuyer2AccountsFinalizedProposalsResume` - Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* `adexchangebuyer2AccountsProductsGet` - Gets the requested product by ID.
* `adexchangebuyer2AccountsProductsList` - List all products visible to the buyer (optionally filtered by the specified PQL query).
* `adexchangebuyer2AccountsProposalsAccept` - Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
* `adexchangebuyer2AccountsProposalsAddNote` - Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
* `adexchangebuyer2AccountsProposalsCancelNegotiation` - Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
* `adexchangebuyer2AccountsProposalsCompleteSetup` - You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
* `adexchangebuyer2AccountsProposalsCreate` - Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
* `adexchangebuyer2AccountsProposalsGet` - Gets a proposal given its ID. The proposal is returned at its head revision.
* `adexchangebuyer2AccountsProposalsList` - List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
* `adexchangebuyer2AccountsProposalsPause` - Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
* `adexchangebuyer2AccountsProposalsResume` - Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
* `adexchangebuyer2AccountsProposalsUpdate` - Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
* `adexchangebuyer2AccountsPublisherProfilesGet` - Gets the requested publisher profile by id.
* `adexchangebuyer2AccountsPublisherProfilesList` - List all publisher profiles visible to the buyer

### bidders

* `adexchangebuyer2BiddersFilterSetsBidMetricsList` - Lists all metrics that are measured in terms of number of bids.
* `adexchangebuyer2BiddersFilterSetsBidResponseErrorsList` - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
* `adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList` - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
* `adexchangebuyer2BiddersFilterSetsCreate` - Creates the specified filter set for the account with the given account ID.
* `adexchangebuyer2BiddersFilterSetsDelete` - Deletes the requested filter set from the account with the given account ID.
* `adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList` - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
* `adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList` - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
* `adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList` - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
* `adexchangebuyer2BiddersFilterSetsFilteredBidsList` - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
* `adexchangebuyer2BiddersFilterSetsGet` - Retrieves the requested filter set for the account with the given account ID.
* `adexchangebuyer2BiddersFilterSetsImpressionMetricsList` - Lists all metrics that are measured in terms of number of impressions.
* `adexchangebuyer2BiddersFilterSetsList` - Lists all filter sets for the account with the given account ID.
* `adexchangebuyer2BiddersFilterSetsLosingBidsList` - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
* `adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList` - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
