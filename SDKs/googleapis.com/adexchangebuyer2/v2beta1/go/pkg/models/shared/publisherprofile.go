package shared

type PublisherProfile struct {
	AudienceDescription      *string                             `json:"audienceDescription"`
	BuyerPitchStatement      *string                             `json:"buyerPitchStatement"`
	DirectDealsContact       *string                             `json:"directDealsContact"`
	DisplayName              *string                             `json:"displayName"`
	Domains                  []string                            `json:"domains"`
	GooglePlusURL            *string                             `json:"googlePlusUrl"`
	IsParent                 *bool                               `json:"isParent"`
	LogoURL                  *string                             `json:"logoUrl"`
	MediaKitURL              *string                             `json:"mediaKitUrl"`
	MobileApps               []PublisherProfileMobileApplication `json:"mobileApps"`
	Overview                 *string                             `json:"overview"`
	ProgrammaticDealsContact *string                             `json:"programmaticDealsContact"`
	PublisherProfileID       *string                             `json:"publisherProfileId"`
	RateCardInfoURL          *string                             `json:"rateCardInfoUrl"`
	SamplePageURL            *string                             `json:"samplePageUrl"`
	Seller                   *Seller                             `json:"seller"`
	TopHeadlines             []string                            `json:"topHeadlines"`
}
