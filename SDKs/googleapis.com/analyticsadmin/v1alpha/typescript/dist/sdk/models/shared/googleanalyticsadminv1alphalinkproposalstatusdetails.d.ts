import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum {
    LinkProposalInitiatingProductUnspecified = "LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED",
    GoogleAnalytics = "GOOGLE_ANALYTICS",
    LinkedProduct = "LINKED_PRODUCT"
}
export declare enum GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum {
    LinkProposalStateUnspecified = "LINK_PROPOSAL_STATE_UNSPECIFIED",
    AwaitingReviewFromGoogleAnalytics = "AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS",
    AwaitingReviewFromLinkedProduct = "AWAITING_REVIEW_FROM_LINKED_PRODUCT",
    Withdrawn = "WITHDRAWN",
    Declined = "DECLINED",
    Expired = "EXPIRED",
    Obsolete = "OBSOLETE"
}
/**
 * Status information for a link proposal.
**/
export declare class GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails extends SpeakeasyBase {
    linkProposalInitiatingProduct?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum;
    linkProposalState?: GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum;
    requestorEmail?: string;
}
