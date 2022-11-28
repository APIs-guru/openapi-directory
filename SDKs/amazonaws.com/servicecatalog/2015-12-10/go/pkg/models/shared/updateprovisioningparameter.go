package shared

// UpdateProvisioningParameter
// The parameter key-value pair used to update a provisioned product.
type UpdateProvisioningParameter struct {
	Key              *string `json:"Key,omitempty"`
	UsePreviousValue *bool   `json:"UsePreviousValue,omitempty"`
	Value            *string `json:"Value,omitempty"`
}
