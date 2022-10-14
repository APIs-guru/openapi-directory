package shared

type ResolverEndpoint struct {
	Arn              *string                        `json:"Arn,omitempty"`
	CreationTime     *string                        `json:"CreationTime,omitempty"`
	CreatorRequestID *string                        `json:"CreatorRequestId,omitempty"`
	Direction        *ResolverEndpointDirectionEnum `json:"Direction,omitempty"`
	HostVpcID        *string                        `json:"HostVPCId,omitempty"`
	ID               *string                        `json:"Id,omitempty"`
	IPAddressCount   *int64                         `json:"IpAddressCount,omitempty"`
	ModificationTime *string                        `json:"ModificationTime,omitempty"`
	Name             *string                        `json:"Name,omitempty"`
	SecurityGroupIds []string                       `json:"SecurityGroupIds,omitempty"`
	Status           *ResolverEndpointStatusEnum    `json:"Status,omitempty"`
	StatusMessage    *string                        `json:"StatusMessage,omitempty"`
}
