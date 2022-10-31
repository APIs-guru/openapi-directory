package shared



type ReplaceServicePerimetersRequest struct {
    Etag *string `json:"etag,omitempty"`
    ServicePerimeters []ServicePerimeter `json:"servicePerimeters,omitempty"`
    
}

