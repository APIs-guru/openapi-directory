package shared

type ImportDestination struct {
	ContactListDestination     *ContactListDestination     `json:"ContactListDestination"`
	SuppressionListDestination *SuppressionListDestination `json:"SuppressionListDestination"`
}
