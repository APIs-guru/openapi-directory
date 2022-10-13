package shared

type ResolverEndpoint struct {
	Arn              *string                        `json:"Arn"`
	CreationTime     *string                        `json:"CreationTime"`
	CreatorRequestID *string                        `json:"CreatorRequestId"`
	Direction        *ResolverEndpointDirectionEnum `json:"Direction"`
	HostVpcID        *string                        `json:"HostVPCId"`
	ID               *string                        `json:"Id"`
	IPAddressCount   *int64                         `json:"IpAddressCount"`
	ModificationTime *string                        `json:"ModificationTime"`
	Name             *string                        `json:"Name"`
	SecurityGroupIds []string                       `json:"SecurityGroupIds"`
	Status           *ResolverEndpointStatusEnum    `json:"Status"`
	StatusMessage    *string                        `json:"StatusMessage"`
}
