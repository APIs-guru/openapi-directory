package shared

type DescribedServer struct {
	Arn                     string                    `json:"Arn"`
	Certificate             *string                   `json:"Certificate"`
	Domain                  *DomainEnum               `json:"Domain"`
	EndpointDetails         *EndpointDetails          `json:"EndpointDetails"`
	EndpointType            *EndpointTypeEnum         `json:"EndpointType"`
	HostKeyFingerprint      *string                   `json:"HostKeyFingerprint"`
	IdentityProviderDetails *IdentityProviderDetails  `json:"IdentityProviderDetails"`
	IdentityProviderType    *IdentityProviderTypeEnum `json:"IdentityProviderType"`
	LoggingRole             *string                   `json:"LoggingRole"`
	ProtocolDetails         *ProtocolDetails          `json:"ProtocolDetails"`
	Protocols               []ProtocolEnum            `json:"Protocols"`
	SecurityPolicyName      *string                   `json:"SecurityPolicyName"`
	ServerID                *string                   `json:"ServerId"`
	State                   *StateEnum                `json:"State"`
	Tags                    []Tag                     `json:"Tags"`
	UserCount               *int64                    `json:"UserCount"`
	WorkflowDetails         *WorkflowDetails          `json:"WorkflowDetails"`
}
