package shared

type GetDimensionKeyDetailsRequest struct {
	Group               string          `json:"Group"`
	GroupIdentifier     string          `json:"GroupIdentifier"`
	Identifier          string          `json:"Identifier"`
	RequestedDimensions []string        `json:"RequestedDimensions"`
	ServiceType         ServiceTypeEnum `json:"ServiceType"`
}
