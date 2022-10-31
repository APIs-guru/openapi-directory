package shared



type ReplaceAccessLevelsRequest struct {
    AccessLevels []AccessLevel `json:"accessLevels,omitempty"`
    Etag *string `json:"etag,omitempty"`
    
}

