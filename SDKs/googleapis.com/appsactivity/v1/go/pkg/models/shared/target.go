package shared

// Target
// Information about the object modified by the event.
type Target struct {
	ID       *string `json:"id,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
	Name     *string `json:"name,omitempty"`
}
