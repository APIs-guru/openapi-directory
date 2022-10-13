package shared

type AttachmentsSource struct {
	Key    *AttachmentsSourceKeyEnum `json:"Key"`
	Name   *string                   `json:"Name"`
	Values []string                  `json:"Values"`
}
