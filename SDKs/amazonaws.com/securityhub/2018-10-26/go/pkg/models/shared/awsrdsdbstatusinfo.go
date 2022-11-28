package shared

// AwsRdsDbStatusInfo
// Information about the status of a read replica.
type AwsRdsDbStatusInfo struct {
	Message    *string `json:"Message,omitempty"`
	Normal     *bool   `json:"Normal,omitempty"`
	Status     *string `json:"Status,omitempty"`
	StatusType *string `json:"StatusType,omitempty"`
}
