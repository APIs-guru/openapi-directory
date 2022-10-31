package shared



type DetectTextRequest struct {
    Filters *DetectTextFilters `json:"Filters,omitempty"`
    Image Image `json:"Image"`
    
}

