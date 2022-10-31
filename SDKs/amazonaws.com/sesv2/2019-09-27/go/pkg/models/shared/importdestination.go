package shared



type ImportDestination struct {
    ContactListDestination *ContactListDestination `json:"ContactListDestination,omitempty"`
    SuppressionListDestination *SuppressionListDestination `json:"SuppressionListDestination,omitempty"`
    
}

