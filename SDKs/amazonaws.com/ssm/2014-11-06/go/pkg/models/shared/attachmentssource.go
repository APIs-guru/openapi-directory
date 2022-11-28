package shared

// AttachmentsSource
// Identifying information about a document attachment, including the file name and a key-value pair that identifies the location of an attachment to a document.
type AttachmentsSource struct {
	Key    *AttachmentsSourceKeyEnum `json:"Key,omitempty"`
	Name   *string                   `json:"Name,omitempty"`
	Values []string                  `json:"Values,omitempty"`
}
