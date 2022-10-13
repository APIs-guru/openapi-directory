package shared

type UpdateProvisioningParameter struct {
	Key              *string `json:"Key"`
	UsePreviousValue *bool   `json:"UsePreviousValue"`
	Value            *string `json:"Value"`
}
