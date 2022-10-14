package shared

type GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum string

const (
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnumLinkProposalInitiatingProductUnspecified GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum = "LINK_PROPOSAL_INITIATING_PRODUCT_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnumGoogleAnalytics                          GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum = "GOOGLE_ANALYTICS"
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnumLinkedProduct                            GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum = "LINKED_PRODUCT"
)

type GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum string

const (
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnumLinkProposalStateUnspecified      GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum = "LINK_PROPOSAL_STATE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnumAwaitingReviewFromGoogleAnalytics GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum = "AWAITING_REVIEW_FROM_GOOGLE_ANALYTICS"
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnumAwaitingReviewFromLinkedProduct   GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum = "AWAITING_REVIEW_FROM_LINKED_PRODUCT"
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnumWithdrawn                         GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum = "WITHDRAWN"
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnumDeclined                          GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum = "DECLINED"
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnumExpired                           GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum = "EXPIRED"
	GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnumObsolete                          GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum = "OBSOLETE"
)

type GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails struct {
	LinkProposalInitiatingProduct *GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalInitiatingProductEnum `json:"linkProposalInitiatingProduct,omitempty"`
	LinkProposalState             *GoogleAnalyticsAdminV1alphaLinkProposalStatusDetailsLinkProposalStateEnum             `json:"linkProposalState,omitempty"`
	RequestorEmail                *string                                                                                `json:"requestorEmail,omitempty"`
}
