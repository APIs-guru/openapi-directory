package shared



type IPAddressEntity struct {
    AssociatedWith *string `json:"associated_with,omitempty"`
    GroupID *int32 `json:"group_id,omitempty"`
    ID *string `json:"id,omitempty"`
    IPAddresses []string `json:"ip_addresses,omitempty"`
    
}

