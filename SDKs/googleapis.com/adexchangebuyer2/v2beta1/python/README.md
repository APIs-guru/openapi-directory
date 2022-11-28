# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.Adexchangebuyer2AccountsClientsCreateRequest(
    security=operations.Adexchangebuyer2AccountsClientsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.Adexchangebuyer2AccountsClientsCreatePathParams(
        account_id="ab",
    ),
    query_params=operations.Adexchangebuyer2AccountsClientsCreateQueryParams(
        dollar_xgafv="1",
        access_token="non",
        alt="proto",
        callback="molestias",
        fields="possimus",
        key="non",
        oauth_token="id",
        pretty_print=False,
        quota_user="veritatis",
        upload_type="sapiente",
        upload_protocol="ducimus",
    ),
    request=shared.Client(
        client_account_id="qui",
        client_name="dolore",
        entity_id="explicabo",
        entity_name="suscipit",
        entity_type="AGENCY",
        partner_client_id="et",
        role="CLIENT_DEAL_VIEWER",
        status="ACTIVE",
        visible_to_seller=True,
    ),
)
    
res = s.accounts.adexchangebuyer2_accounts_clients_create(req)

if res.client is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accounts

* `adexchangebuyer2_accounts_clients_create` - Creates a new client buyer.
* `adexchangebuyer2_accounts_clients_get` - Gets a client buyer with a given client account ID.
* `adexchangebuyer2_accounts_clients_invitations_create` - Creates and sends out an email invitation to access an Ad Exchange client buyer account.
* `adexchangebuyer2_accounts_clients_invitations_get` - Retrieves an existing client user invitation.
* `adexchangebuyer2_accounts_clients_invitations_list` - Lists all the client users invitations for a client with a given account ID.
* `adexchangebuyer2_accounts_clients_list` - Lists all the clients for the current sponsor buyer.
* `adexchangebuyer2_accounts_clients_update` - Updates an existing client buyer.
* `adexchangebuyer2_accounts_clients_users_get` - Retrieves an existing client user.
* `adexchangebuyer2_accounts_clients_users_list` - Lists all the known client users for a specified sponsor buyer account ID.
* `adexchangebuyer2_accounts_clients_users_update` - Updates an existing client user. Only the user status can be changed on update.
* `adexchangebuyer2_accounts_creatives_create` - Creates a creative.
* `adexchangebuyer2_accounts_creatives_deal_associations_add` - Associate an existing deal with a creative.
* `adexchangebuyer2_accounts_creatives_deal_associations_list` - List all creative-deal associations.
* `adexchangebuyer2_accounts_creatives_deal_associations_remove` - Remove the association between a deal and a creative.
* `adexchangebuyer2_accounts_creatives_get` - Gets a creative.
* `adexchangebuyer2_accounts_creatives_list` - Lists creatives.
* `adexchangebuyer2_accounts_creatives_stop_watching` - Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
* `adexchangebuyer2_accounts_creatives_update` - Updates a creative.
* `adexchangebuyer2_accounts_creatives_watch` - Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
* `adexchangebuyer2_accounts_finalized_proposals_list` - List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
* `adexchangebuyer2_accounts_finalized_proposals_pause` - Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* `adexchangebuyer2_accounts_finalized_proposals_resume` - Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
* `adexchangebuyer2_accounts_products_get` - Gets the requested product by ID.
* `adexchangebuyer2_accounts_products_list` - List all products visible to the buyer (optionally filtered by the specified PQL query).
* `adexchangebuyer2_accounts_proposals_accept` - Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
* `adexchangebuyer2_accounts_proposals_add_note` - Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
* `adexchangebuyer2_accounts_proposals_cancel_negotiation` - Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
* `adexchangebuyer2_accounts_proposals_complete_setup` - You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
* `adexchangebuyer2_accounts_proposals_create` - Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
* `adexchangebuyer2_accounts_proposals_get` - Gets a proposal given its ID. The proposal is returned at its head revision.
* `adexchangebuyer2_accounts_proposals_list` - List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
* `adexchangebuyer2_accounts_proposals_pause` - Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
* `adexchangebuyer2_accounts_proposals_resume` - Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
* `adexchangebuyer2_accounts_proposals_update` - Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
* `adexchangebuyer2_accounts_publisher_profiles_get` - Gets the requested publisher profile by id.
* `adexchangebuyer2_accounts_publisher_profiles_list` - List all publisher profiles visible to the buyer

### bidders

* `adexchangebuyer2_bidders_filter_sets_bid_metrics_list` - Lists all metrics that are measured in terms of number of bids.
* `adexchangebuyer2_bidders_filter_sets_bid_response_errors_list` - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
* `adexchangebuyer2_bidders_filter_sets_bid_responses_without_bids_list` - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
* `adexchangebuyer2_bidders_filter_sets_create` - Creates the specified filter set for the account with the given account ID.
* `adexchangebuyer2_bidders_filter_sets_delete` - Deletes the requested filter set from the account with the given account ID.
* `adexchangebuyer2_bidders_filter_sets_filtered_bid_requests_list` - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
* `adexchangebuyer2_bidders_filter_sets_filtered_bids_creatives_list` - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
* `adexchangebuyer2_bidders_filter_sets_filtered_bids_details_list` - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
* `adexchangebuyer2_bidders_filter_sets_filtered_bids_list` - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
* `adexchangebuyer2_bidders_filter_sets_get` - Retrieves the requested filter set for the account with the given account ID.
* `adexchangebuyer2_bidders_filter_sets_impression_metrics_list` - Lists all metrics that are measured in terms of number of impressions.
* `adexchangebuyer2_bidders_filter_sets_list` - Lists all filter sets for the account with the given account ID.
* `adexchangebuyer2_bidders_filter_sets_losing_bids_list` - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
* `adexchangebuyer2_bidders_filter_sets_non_billable_winning_bids_list` - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
