package shared

// OperationStatusFilter
// Filters he operation status list based on the passed attribute value.
type OperationStatusFilter struct {
	Status *StatusValuesEnum `json:"Status,omitempty"`
}
