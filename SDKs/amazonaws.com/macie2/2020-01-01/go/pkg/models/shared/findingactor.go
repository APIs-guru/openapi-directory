package shared

type FindingActor struct {
	DomainDetails    *DomainDetails    `json:"domainDetails"`
	IPAddressDetails *IPAddressDetails `json:"ipAddressDetails"`
	UserIdentity     *UserIdentity     `json:"userIdentity"`
}
