package shared

type PublisherProfile struct {
	AudienceDescription      *string                             `json:"audienceDescription,omitempty"`
	BuyerPitchStatement      *string                             `json:"buyerPitchStatement,omitempty"`
	DirectDealsContact       *string                             `json:"directDealsContact,omitempty"`
	DisplayName              *string                             `json:"displayName,omitempty"`
	Domains                  []string                            `json:"domains,omitempty"`
	GooglePlusURL            *string                             `json:"googlePlusUrl,omitempty"`
	IsParent                 *bool                               `json:"isParent,omitempty"`
	LogoURL                  *string                             `json:"logoUrl,omitempty"`
	MediaKitURL              *string                             `json:"mediaKitUrl,omitempty"`
	MobileApps               []PublisherProfileMobileApplication `json:"mobileApps,omitempty"`
	Overview                 *string                             `json:"overview,omitempty"`
	ProgrammaticDealsContact *string                             `json:"programmaticDealsContact,omitempty"`
	PublisherProfileID       *string                             `json:"publisherProfileId,omitempty"`
	RateCardInfoURL          *string                             `json:"rateCardInfoUrl,omitempty"`
	SamplePageURL            *string                             `json:"samplePageUrl,omitempty"`
	Seller                   *Seller                             `json:"seller,omitempty"`
	TopHeadlines             []string                            `json:"topHeadlines,omitempty"`
}
