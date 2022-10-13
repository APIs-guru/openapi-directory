package shared

type DetectFacesRequest struct {
	Attributes []AttributeEnum `json:"Attributes"`
	Image      Image           `json:"Image"`
}
