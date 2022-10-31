package shared

type GetDimensionKeyDetailsRequest struct {
	Group               string          `json:"Group"`
	GroupIdentifier     string          `json:"GroupIdentifier"`
	Identifier          string          `json:"Identifier"`
	RequestedDimensions []string        `json:"RequestedDimensions,omitempty"`
	ServiceType         ServiceTypeEnum `json:"ServiceType"`
}
