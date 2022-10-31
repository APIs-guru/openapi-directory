package shared

type PublisherProfile struct {
	AudienceDescription      *string                             `json:"audienceDescription,omitempty"`
	DirectDealsContact       *string                             `json:"directDealsContact,omitempty"`
	DisplayName              *string                             `json:"displayName,omitempty"`
	Domains                  []string                            `json:"domains,omitempty"`
	IsParent                 *bool                               `json:"isParent,omitempty"`
	LogoURL                  *string                             `json:"logoUrl,omitempty"`
	MediaKitURL              *string                             `json:"mediaKitUrl,omitempty"`
	MobileApps               []PublisherProfileMobileApplication `json:"mobileApps,omitempty"`
	Name                     *string                             `json:"name,omitempty"`
	Overview                 *string                             `json:"overview,omitempty"`
	PitchStatement           *string                             `json:"pitchStatement,omitempty"`
	ProgrammaticDealsContact *string                             `json:"programmaticDealsContact,omitempty"`
	PublisherCode            *string                             `json:"publisherCode,omitempty"`
	SamplePageURL            *string                             `json:"samplePageUrl,omitempty"`
	TopHeadlines             []string                            `json:"topHeadlines,omitempty"`
}
