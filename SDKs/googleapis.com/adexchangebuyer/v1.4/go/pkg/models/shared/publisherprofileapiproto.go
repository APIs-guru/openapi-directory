package shared

type PublisherProfileAPIProto struct {
	Audience                  *string                    `json:"audience"`
	BuyerPitchStatement       *string                    `json:"buyerPitchStatement"`
	DirectContact             *string                    `json:"directContact"`
	Exchange                  *string                    `json:"exchange"`
	ForecastInventory         *string                    `json:"forecastInventory"`
	GooglePlusLink            *string                    `json:"googlePlusLink"`
	IsParent                  *bool                      `json:"isParent"`
	IsPublished               *bool                      `json:"isPublished"`
	Kind                      *string                    `json:"kind"`
	LogoURL                   *string                    `json:"logoUrl"`
	MediaKitLink              *string                    `json:"mediaKitLink"`
	Name                      *string                    `json:"name"`
	Overview                  *string                    `json:"overview"`
	ProfileID                 *int32                     `json:"profileId"`
	ProgrammaticContact       *string                    `json:"programmaticContact"`
	PublisherAppIds           []string                   `json:"publisherAppIds"`
	PublisherApps             []MobileApplication        `json:"publisherApps"`
	PublisherDomains          []string                   `json:"publisherDomains"`
	PublisherProfileID        *string                    `json:"publisherProfileId"`
	PublisherProvidedForecast *PublisherProvidedForecast `json:"publisherProvidedForecast"`
	RateCardInfoLink          *string                    `json:"rateCardInfoLink"`
	SamplePageLink            *string                    `json:"samplePageLink"`
	Seller                    *Seller                    `json:"seller"`
	State                     *string                    `json:"state"`
	TopHeadlines              []string                   `json:"topHeadlines"`
}
