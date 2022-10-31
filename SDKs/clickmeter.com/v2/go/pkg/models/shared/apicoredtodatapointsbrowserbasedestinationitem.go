package shared

type APICoreDtoDatapointsBrowserBaseDestinationItem struct {
	EmailDestinationURL   *string `json:"emailDestinationUrl,omitempty"`
	MobileDestinationURL  *string `json:"mobileDestinationUrl,omitempty"`
	SpidersDestinationURL *string `json:"spidersDestinationUrl,omitempty"`
}
