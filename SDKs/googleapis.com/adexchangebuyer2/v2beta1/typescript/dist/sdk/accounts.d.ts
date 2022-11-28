import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyer2AccountsClientsCreate - Creates a new client buyer.
    **/
    adexchangebuyer2AccountsClientsCreate(req: operations.Adexchangebuyer2AccountsClientsCreateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsCreateResponse>;
    /**
     * adexchangebuyer2AccountsClientsGet - Gets a client buyer with a given client account ID.
    **/
    adexchangebuyer2AccountsClientsGet(req: operations.Adexchangebuyer2AccountsClientsGetRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsGetResponse>;
    /**
     * adexchangebuyer2AccountsClientsInvitationsCreate - Creates and sends out an email invitation to access an Ad Exchange client buyer account.
    **/
    adexchangebuyer2AccountsClientsInvitationsCreate(req: operations.Adexchangebuyer2AccountsClientsInvitationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsInvitationsCreateResponse>;
    /**
     * adexchangebuyer2AccountsClientsInvitationsGet - Retrieves an existing client user invitation.
    **/
    adexchangebuyer2AccountsClientsInvitationsGet(req: operations.Adexchangebuyer2AccountsClientsInvitationsGetRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsInvitationsGetResponse>;
    /**
     * adexchangebuyer2AccountsClientsInvitationsList - Lists all the client users invitations for a client with a given account ID.
    **/
    adexchangebuyer2AccountsClientsInvitationsList(req: operations.Adexchangebuyer2AccountsClientsInvitationsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsInvitationsListResponse>;
    /**
     * adexchangebuyer2AccountsClientsList - Lists all the clients for the current sponsor buyer.
    **/
    adexchangebuyer2AccountsClientsList(req: operations.Adexchangebuyer2AccountsClientsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsListResponse>;
    /**
     * adexchangebuyer2AccountsClientsUpdate - Updates an existing client buyer.
    **/
    adexchangebuyer2AccountsClientsUpdate(req: operations.Adexchangebuyer2AccountsClientsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsUpdateResponse>;
    /**
     * adexchangebuyer2AccountsClientsUsersGet - Retrieves an existing client user.
    **/
    adexchangebuyer2AccountsClientsUsersGet(req: operations.Adexchangebuyer2AccountsClientsUsersGetRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsUsersGetResponse>;
    /**
     * adexchangebuyer2AccountsClientsUsersList - Lists all the known client users for a specified sponsor buyer account ID.
    **/
    adexchangebuyer2AccountsClientsUsersList(req: operations.Adexchangebuyer2AccountsClientsUsersListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsUsersListResponse>;
    /**
     * adexchangebuyer2AccountsClientsUsersUpdate - Updates an existing client user. Only the user status can be changed on update.
    **/
    adexchangebuyer2AccountsClientsUsersUpdate(req: operations.Adexchangebuyer2AccountsClientsUsersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsClientsUsersUpdateResponse>;
    /**
     * adexchangebuyer2AccountsCreativesCreate - Creates a creative.
    **/
    adexchangebuyer2AccountsCreativesCreate(req: operations.Adexchangebuyer2AccountsCreativesCreateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesCreateResponse>;
    /**
     * adexchangebuyer2AccountsCreativesDealAssociationsAdd - Associate an existing deal with a creative.
    **/
    adexchangebuyer2AccountsCreativesDealAssociationsAdd(req: operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesDealAssociationsAddResponse>;
    /**
     * adexchangebuyer2AccountsCreativesDealAssociationsList - List all creative-deal associations.
    **/
    adexchangebuyer2AccountsCreativesDealAssociationsList(req: operations.Adexchangebuyer2AccountsCreativesDealAssociationsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesDealAssociationsListResponse>;
    /**
     * adexchangebuyer2AccountsCreativesDealAssociationsRemove - Remove the association between a deal and a creative.
    **/
    adexchangebuyer2AccountsCreativesDealAssociationsRemove(req: operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesDealAssociationsRemoveResponse>;
    /**
     * adexchangebuyer2AccountsCreativesGet - Gets a creative.
    **/
    adexchangebuyer2AccountsCreativesGet(req: operations.Adexchangebuyer2AccountsCreativesGetRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesGetResponse>;
    /**
     * adexchangebuyer2AccountsCreativesList - Lists creatives.
    **/
    adexchangebuyer2AccountsCreativesList(req: operations.Adexchangebuyer2AccountsCreativesListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesListResponse>;
    /**
     * adexchangebuyer2AccountsCreativesStopWatching - Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
    **/
    adexchangebuyer2AccountsCreativesStopWatching(req: operations.Adexchangebuyer2AccountsCreativesStopWatchingRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesStopWatchingResponse>;
    /**
     * adexchangebuyer2AccountsCreativesUpdate - Updates a creative.
    **/
    adexchangebuyer2AccountsCreativesUpdate(req: operations.Adexchangebuyer2AccountsCreativesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesUpdateResponse>;
    /**
     * adexchangebuyer2AccountsCreativesWatch - Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
    **/
    adexchangebuyer2AccountsCreativesWatch(req: operations.Adexchangebuyer2AccountsCreativesWatchRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsCreativesWatchResponse>;
    /**
     * adexchangebuyer2AccountsFinalizedProposalsList - List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
    **/
    adexchangebuyer2AccountsFinalizedProposalsList(req: operations.Adexchangebuyer2AccountsFinalizedProposalsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsFinalizedProposalsListResponse>;
    /**
     * adexchangebuyer2AccountsFinalizedProposalsPause - Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
    **/
    adexchangebuyer2AccountsFinalizedProposalsPause(req: operations.Adexchangebuyer2AccountsFinalizedProposalsPauseRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsFinalizedProposalsPauseResponse>;
    /**
     * adexchangebuyer2AccountsFinalizedProposalsResume - Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
    **/
    adexchangebuyer2AccountsFinalizedProposalsResume(req: operations.Adexchangebuyer2AccountsFinalizedProposalsResumeRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsFinalizedProposalsResumeResponse>;
    /**
     * adexchangebuyer2AccountsProductsGet - Gets the requested product by ID.
    **/
    adexchangebuyer2AccountsProductsGet(req: operations.Adexchangebuyer2AccountsProductsGetRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProductsGetResponse>;
    /**
     * adexchangebuyer2AccountsProductsList - List all products visible to the buyer (optionally filtered by the specified PQL query).
    **/
    adexchangebuyer2AccountsProductsList(req: operations.Adexchangebuyer2AccountsProductsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProductsListResponse>;
    /**
     * adexchangebuyer2AccountsProposalsAccept - Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
    **/
    adexchangebuyer2AccountsProposalsAccept(req: operations.Adexchangebuyer2AccountsProposalsAcceptRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsAcceptResponse>;
    /**
     * adexchangebuyer2AccountsProposalsAddNote - Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
    **/
    adexchangebuyer2AccountsProposalsAddNote(req: operations.Adexchangebuyer2AccountsProposalsAddNoteRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsAddNoteResponse>;
    /**
     * adexchangebuyer2AccountsProposalsCancelNegotiation - Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
    **/
    adexchangebuyer2AccountsProposalsCancelNegotiation(req: operations.Adexchangebuyer2AccountsProposalsCancelNegotiationRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsCancelNegotiationResponse>;
    /**
     * adexchangebuyer2AccountsProposalsCompleteSetup - You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
    **/
    adexchangebuyer2AccountsProposalsCompleteSetup(req: operations.Adexchangebuyer2AccountsProposalsCompleteSetupRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsCompleteSetupResponse>;
    /**
     * adexchangebuyer2AccountsProposalsCreate - Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
    **/
    adexchangebuyer2AccountsProposalsCreate(req: operations.Adexchangebuyer2AccountsProposalsCreateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsCreateResponse>;
    /**
     * adexchangebuyer2AccountsProposalsGet - Gets a proposal given its ID. The proposal is returned at its head revision.
    **/
    adexchangebuyer2AccountsProposalsGet(req: operations.Adexchangebuyer2AccountsProposalsGetRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsGetResponse>;
    /**
     * adexchangebuyer2AccountsProposalsList - List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
    **/
    adexchangebuyer2AccountsProposalsList(req: operations.Adexchangebuyer2AccountsProposalsListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsListResponse>;
    /**
     * adexchangebuyer2AccountsProposalsPause - Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
    **/
    adexchangebuyer2AccountsProposalsPause(req: operations.Adexchangebuyer2AccountsProposalsPauseRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsPauseResponse>;
    /**
     * adexchangebuyer2AccountsProposalsResume - Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
    **/
    adexchangebuyer2AccountsProposalsResume(req: operations.Adexchangebuyer2AccountsProposalsResumeRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsResumeResponse>;
    /**
     * adexchangebuyer2AccountsProposalsUpdate - Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
    **/
    adexchangebuyer2AccountsProposalsUpdate(req: operations.Adexchangebuyer2AccountsProposalsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsProposalsUpdateResponse>;
    /**
     * adexchangebuyer2AccountsPublisherProfilesGet - Gets the requested publisher profile by id.
    **/
    adexchangebuyer2AccountsPublisherProfilesGet(req: operations.Adexchangebuyer2AccountsPublisherProfilesGetRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsPublisherProfilesGetResponse>;
    /**
     * adexchangebuyer2AccountsPublisherProfilesList - List all publisher profiles visible to the buyer
    **/
    adexchangebuyer2AccountsPublisherProfilesList(req: operations.Adexchangebuyer2AccountsPublisherProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.Adexchangebuyer2AccountsPublisherProfilesListResponse>;
}
