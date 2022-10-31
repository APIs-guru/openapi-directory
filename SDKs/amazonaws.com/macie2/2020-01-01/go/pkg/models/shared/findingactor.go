package shared

type FindingActor struct {
	DomainDetails    *DomainDetails    `json:"domainDetails,omitempty"`
	IPAddressDetails *IPAddressDetails `json:"ipAddressDetails,omitempty"`
	UserIdentity     *UserIdentity     `json:"userIdentity,omitempty"`
}
