package shared

// FindingActor
// Provides information about an entity that performed an action that produced a policy finding for a resource.
type FindingActor struct {
	DomainDetails    *DomainDetails    `json:"domainDetails,omitempty"`
	IPAddressDetails *IPAddressDetails `json:"ipAddressDetails,omitempty"`
	UserIdentity     *UserIdentity     `json:"userIdentity,omitempty"`
}
