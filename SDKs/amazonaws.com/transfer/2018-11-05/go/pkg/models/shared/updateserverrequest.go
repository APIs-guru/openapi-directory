package shared

type UpdateServerRequest struct {
	Certificate             *string                  `json:"Certificate,omitempty"`
	EndpointDetails         *EndpointDetails         `json:"EndpointDetails,omitempty"`
	EndpointType            *EndpointTypeEnum        `json:"EndpointType,omitempty"`
	HostKey                 *string                  `json:"HostKey,omitempty"`
	IdentityProviderDetails *IdentityProviderDetails `json:"IdentityProviderDetails,omitempty"`
	LoggingRole             *string                  `json:"LoggingRole,omitempty"`
	ProtocolDetails         *ProtocolDetails         `json:"ProtocolDetails,omitempty"`
	Protocols               []ProtocolEnum           `json:"Protocols,omitempty"`
	SecurityPolicyName      *string                  `json:"SecurityPolicyName,omitempty"`
	ServerID                string                   `json:"ServerId"`
	WorkflowDetails         *WorkflowDetails         `json:"WorkflowDetails,omitempty"`
}
