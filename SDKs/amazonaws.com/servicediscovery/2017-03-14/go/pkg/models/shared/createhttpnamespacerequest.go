package shared

type CreateHTTPNamespaceRequest struct {
	CreatorRequestID *string `json:"CreatorRequestId,omitempty"`
	Description      *string `json:"Description,omitempty"`
	Name             string  `json:"Name"`
	Tags             []Tag   `json:"Tags,omitempty"`
}
