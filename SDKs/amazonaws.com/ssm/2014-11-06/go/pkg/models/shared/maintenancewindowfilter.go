package shared

type MaintenanceWindowFilter struct {
	Key    *string  `json:"Key"`
	Values []string `json:"Values"`
}
