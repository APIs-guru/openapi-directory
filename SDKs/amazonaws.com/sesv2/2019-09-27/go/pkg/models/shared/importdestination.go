package shared

// ImportDestination
// An object that contains details about the resource destination the import job is going to target.
type ImportDestination struct {
	ContactListDestination     *ContactListDestination     `json:"ContactListDestination,omitempty"`
	SuppressionListDestination *SuppressionListDestination `json:"SuppressionListDestination,omitempty"`
}
