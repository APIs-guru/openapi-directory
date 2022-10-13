package shared

type PublisherProfile struct {
	AudienceDescription      *string                             `json:"audienceDescription"`
	DirectDealsContact       *string                             `json:"directDealsContact"`
	DisplayName              *string                             `json:"displayName"`
	Domains                  []string                            `json:"domains"`
	IsParent                 *bool                               `json:"isParent"`
	LogoURL                  *string                             `json:"logoUrl"`
	MediaKitURL              *string                             `json:"mediaKitUrl"`
	MobileApps               []PublisherProfileMobileApplication `json:"mobileApps"`
	Name                     *string                             `json:"name"`
	Overview                 *string                             `json:"overview"`
	PitchStatement           *string                             `json:"pitchStatement"`
	ProgrammaticDealsContact *string                             `json:"programmaticDealsContact"`
	PublisherCode            *string                             `json:"publisherCode"`
	SamplePageURL            *string                             `json:"samplePageUrl"`
	TopHeadlines             []string                            `json:"topHeadlines"`
}
