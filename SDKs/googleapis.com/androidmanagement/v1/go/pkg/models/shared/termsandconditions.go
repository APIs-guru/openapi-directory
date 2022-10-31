package shared



type TermsAndConditions struct {
    Content *UserFacingMessage `json:"content,omitempty"`
    Header *UserFacingMessage `json:"header,omitempty"`
    
}

