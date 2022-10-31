package shared



type DescribedServer struct {
    Arn string `json:"Arn"`
    Certificate *string `json:"Certificate,omitempty"`
    Domain *DomainEnum `json:"Domain,omitempty"`
    EndpointDetails *EndpointDetails `json:"EndpointDetails,omitempty"`
    EndpointType *EndpointTypeEnum `json:"EndpointType,omitempty"`
    HostKeyFingerprint *string `json:"HostKeyFingerprint,omitempty"`
    IdentityProviderDetails *IdentityProviderDetails `json:"IdentityProviderDetails,omitempty"`
    IdentityProviderType *IdentityProviderTypeEnum `json:"IdentityProviderType,omitempty"`
    LoggingRole *string `json:"LoggingRole,omitempty"`
    ProtocolDetails *ProtocolDetails `json:"ProtocolDetails,omitempty"`
    Protocols []ProtocolEnum `json:"Protocols,omitempty"`
    SecurityPolicyName *string `json:"SecurityPolicyName,omitempty"`
    ServerID *string `json:"ServerId,omitempty"`
    State *StateEnum `json:"State,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    UserCount *int64 `json:"UserCount,omitempty"`
    WorkflowDetails *WorkflowDetails `json:"WorkflowDetails,omitempty"`
    
}

