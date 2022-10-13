package shared

type CreatePrivateDNSNamespaceRequest struct {
	CreatorRequestID *string                        `json:"CreatorRequestId"`
	Description      *string                        `json:"Description"`
	Name             string                         `json:"Name"`
	Properties       *PrivateDNSNamespaceProperties `json:"Properties"`
	Tags             []Tag                          `json:"Tags"`
	Vpc              string                         `json:"Vpc"`
}
