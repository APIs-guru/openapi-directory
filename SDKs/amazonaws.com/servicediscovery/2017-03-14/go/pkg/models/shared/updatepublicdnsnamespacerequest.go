package shared

type UpdatePublicDNSNamespaceRequest struct {
	ID               string                   `json:"Id"`
	Namespace        PublicDNSNamespaceChange `json:"Namespace"`
	UpdaterRequestID *string                  `json:"UpdaterRequestId,omitempty"`
}
