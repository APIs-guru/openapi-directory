package shared



type AcceptPageRequest struct {
    AcceptCode string `json:"AcceptCode"`
    AcceptCodeValidation *AcceptCodeValidationEnum `json:"AcceptCodeValidation,omitempty"`
    AcceptType AcceptTypeEnum `json:"AcceptType"`
    ContactChannelID *string `json:"ContactChannelId,omitempty"`
    Note *string `json:"Note,omitempty"`
    PageID string `json:"PageId"`
    
}

