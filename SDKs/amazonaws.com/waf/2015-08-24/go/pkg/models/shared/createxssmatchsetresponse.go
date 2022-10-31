package shared



type CreateXSSMatchSetResponse struct {
    ChangeToken *string `json:"ChangeToken,omitempty"`
    XSSMatchSet *XSSMatchSet `json:"XssMatchSet,omitempty"`
    
}

