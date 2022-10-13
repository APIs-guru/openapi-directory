package shared

type CreatePublicDNSNamespaceRequest struct {
	CreatorRequestID *string                       `json:"CreatorRequestId"`
	Description      *string                       `json:"Description"`
	Name             string                        `json:"Name"`
	Properties       *PublicDNSNamespaceProperties `json:"Properties"`
	Tags             []Tag                         `json:"Tags"`
}
