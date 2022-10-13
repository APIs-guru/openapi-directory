package shared

type IPAddressEntity struct {
	AssociatedWith *string  `json:"associated_with"`
	GroupID        *int32   `json:"group_id"`
	ID             *string  `json:"id"`
	IPAddresses    []string `json:"ip_addresses"`
}
