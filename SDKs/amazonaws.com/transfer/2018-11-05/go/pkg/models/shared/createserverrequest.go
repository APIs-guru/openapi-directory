package shared

type CreateServerRequest struct {
	Certificate             *string                   `json:"Certificate"`
	Domain                  *DomainEnum               `json:"Domain"`
	EndpointDetails         *EndpointDetails          `json:"EndpointDetails"`
	EndpointType            *EndpointTypeEnum         `json:"EndpointType"`
	HostKey                 *string                   `json:"HostKey"`
	IdentityProviderDetails *IdentityProviderDetails  `json:"IdentityProviderDetails"`
	IdentityProviderType    *IdentityProviderTypeEnum `json:"IdentityProviderType"`
	LoggingRole             *string                   `json:"LoggingRole"`
	Protocols               []ProtocolEnum            `json:"Protocols"`
	SecurityPolicyName      *string                   `json:"SecurityPolicyName"`
	Tags                    []Tag                     `json:"Tags"`
	WorkflowDetails         *WorkflowDetails          `json:"WorkflowDetails"`
}
