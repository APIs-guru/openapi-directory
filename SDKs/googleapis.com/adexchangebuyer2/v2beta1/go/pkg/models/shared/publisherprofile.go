package shared

// PublisherProfile
// Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.
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
