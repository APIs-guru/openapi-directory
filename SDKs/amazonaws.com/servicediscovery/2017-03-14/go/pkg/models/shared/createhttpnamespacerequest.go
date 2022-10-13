package shared

type CreateHTTPNamespaceRequest struct {
	CreatorRequestID *string `json:"CreatorRequestId"`
	Description      *string `json:"Description"`
	Name             string  `json:"Name"`
	Tags             []Tag   `json:"Tags"`
}
