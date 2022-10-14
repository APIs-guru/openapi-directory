package shared

type ApplicationTransferParam struct {
	Key   *string  `json:"key,omitempty"`
	Value []string `json:"value,omitempty"`
}
