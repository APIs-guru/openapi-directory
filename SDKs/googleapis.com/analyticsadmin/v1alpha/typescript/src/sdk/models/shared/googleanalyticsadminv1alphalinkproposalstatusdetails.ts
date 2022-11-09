import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum {
    LinkProposalInitiatingProductUnspecified = "LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED"
,    GoogleAnalytics = "GOOGLE_ANALYTICS"
,    LinkedProduct = "LINKED_PRODUCT"
}

export enum GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum {
    LinkProposalStateUnspecified = "LINK_PROPOSAL_STATE_UNSPECIFIED"
,    AwaitingReviewFromGoogleAnalytics = "AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS"
,    AwaitingReviewFromLinkedProduct = "AWAITING_REVIEW_FROM_LINKED_PRODUCT"
,    Withdrawn = "WITHDRAWN"
,    Declined = "DECLINED"
,    Expired = "EXPIRED"
,    Obsolete = "OBSOLETE"
}


// GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails
/** 
 * Status information for a link proposal.
**/
export class GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkProposalInitiatingProduct" })
  linkProposalInitiatingProduct?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum;

  @Metadata({ data: "json, name=linkProposalState" })
  linkProposalState?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum;

  @Metadata({ data: "json, name=requestorEmail" })
  requestorEmail?: string;
}
