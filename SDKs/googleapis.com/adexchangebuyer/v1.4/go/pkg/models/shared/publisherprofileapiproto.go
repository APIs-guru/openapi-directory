package shared



type PublisherProfileAPIProto struct {
    Audience *string `json:"audience,omitempty"`
    BuyerPitchStatement *string `json:"buyerPitchStatement,omitempty"`
    DirectContact *string `json:"directContact,omitempty"`
    Exchange *string `json:"exchange,omitempty"`
    ForecastInventory *string `json:"forecastInventory,omitempty"`
    GooglePlusLink *string `json:"googlePlusLink,omitempty"`
    IsParent *bool `json:"isParent,omitempty"`
    IsPublished *bool `json:"isPublished,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LogoURL *string `json:"logoUrl,omitempty"`
    MediaKitLink *string `json:"mediaKitLink,omitempty"`
    Name *string `json:"name,omitempty"`
    Overview *string `json:"overview,omitempty"`
    ProfileID *int32 `json:"profileId,omitempty"`
    ProgrammaticContact *string `json:"programmaticContact,omitempty"`
    PublisherAppIds []string `json:"publisherAppIds,omitempty"`
    PublisherApps []MobileApplication `json:"publisherApps,omitempty"`
    PublisherDomains []string `json:"publisherDomains,omitempty"`
    PublisherProfileID *string `json:"publisherProfileId,omitempty"`
    PublisherProvidedForecast *PublisherProvidedForecast `json:"publisherProvidedForecast,omitempty"`
    RateCardInfoLink *string `json:"rateCardInfoLink,omitempty"`
    SamplePageLink *string `json:"samplePageLink,omitempty"`
    Seller *Seller `json:"seller,omitempty"`
    State *string `json:"state,omitempty"`
    TopHeadlines []string `json:"topHeadlines,omitempty"`
    
}

