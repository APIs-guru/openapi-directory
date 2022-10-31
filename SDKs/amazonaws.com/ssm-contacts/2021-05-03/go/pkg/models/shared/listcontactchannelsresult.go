package shared



type ListContactChannelsResult struct {
    ContactChannels []ContactChannel `json:"ContactChannels"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

