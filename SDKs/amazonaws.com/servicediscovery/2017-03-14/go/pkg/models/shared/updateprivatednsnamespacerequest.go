package shared

type UpdatePrivateDNSNamespaceRequest struct {
	ID               string                    `json:"Id"`
	Namespace        PrivateDNSNamespaceChange `json:"Namespace"`
	UpdaterRequestID *string                   `json:"UpdaterRequestId"`
}
