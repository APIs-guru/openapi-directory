package shared

// GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse
// Response message for ListDisplayVideo360AdvertiserLinkProposals RPC.
type GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse struct {
	DisplayVideo360AdvertiserLinkProposals []GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal `json:"displayVideo360AdvertiserLinkProposals,omitempty"`
	NextPageToken                          *string                                                            `json:"nextPageToken,omitempty"`
}
