package shared

// ApplicationTransferParam
// Template for application transfer parameters.
type ApplicationTransferParam struct {
	Key   *string  `json:"key,omitempty"`
	Value []string `json:"value,omitempty"`
}
