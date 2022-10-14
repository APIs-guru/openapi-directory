package shared

type UpdateHTTPNamespaceRequest struct {
	ID               string              `json:"Id"`
	Namespace        HTTPNamespaceChange `json:"Namespace"`
	UpdaterRequestID *string             `json:"UpdaterRequestId,omitempty"`
}
