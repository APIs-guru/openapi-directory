package shared

type FirewallDomainList struct {
	Arn              *string                       `json:"Arn"`
	CreationTime     *string                       `json:"CreationTime"`
	CreatorRequestID *string                       `json:"CreatorRequestId"`
	DomainCount      *int64                        `json:"DomainCount"`
	ID               *string                       `json:"Id"`
	ManagedOwnerName *string                       `json:"ManagedOwnerName"`
	ModificationTime *string                       `json:"ModificationTime"`
	Name             *string                       `json:"Name"`
	Status           *FirewallDomainListStatusEnum `json:"Status"`
	StatusMessage    *string                       `json:"StatusMessage"`
}
