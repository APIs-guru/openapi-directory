package shared

type UpdateServerRequest struct {
	Certificate             *string                  `json:"Certificate"`
	EndpointDetails         *EndpointDetails         `json:"EndpointDetails"`
	EndpointType            *EndpointTypeEnum        `json:"EndpointType"`
	HostKey                 *string                  `json:"HostKey"`
	IdentityProviderDetails *IdentityProviderDetails `json:"IdentityProviderDetails"`
	LoggingRole             *string                  `json:"LoggingRole"`
	ProtocolDetails         *ProtocolDetails         `json:"ProtocolDetails"`
	Protocols               []ProtocolEnum           `json:"Protocols"`
	SecurityPolicyName      *string                  `json:"SecurityPolicyName"`
	ServerID                string                   `json:"ServerId"`
	WorkflowDetails         *WorkflowDetails         `json:"WorkflowDetails"`
}
