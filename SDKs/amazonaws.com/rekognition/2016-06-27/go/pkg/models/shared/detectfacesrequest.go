package shared

type DetectFacesRequest struct {
	Attributes []AttributeEnum `json:"Attributes,omitempty"`
	Image      Image           `json:"Image"`
}
