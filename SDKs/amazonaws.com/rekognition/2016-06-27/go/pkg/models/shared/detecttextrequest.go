package shared

type DetectTextRequest struct {
	Filters *DetectTextFilters `json:"Filters"`
	Image   Image              `json:"Image"`
}
