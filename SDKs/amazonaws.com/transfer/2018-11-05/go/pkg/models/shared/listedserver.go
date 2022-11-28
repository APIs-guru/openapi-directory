package shared

// ListedServer
// Returns properties of a file transfer protocol-enabled server that was specified.
type ListedServer struct {
	Arn                  string                    `json:"Arn"`
	Domain               *DomainEnum               `json:"Domain,omitempty"`
	EndpointType         *EndpointTypeEnum         `json:"EndpointType,omitempty"`
	IdentityProviderType *IdentityProviderTypeEnum `json:"IdentityProviderType,omitempty"`
	LoggingRole          *string                   `json:"LoggingRole,omitempty"`
	ServerID             *string                   `json:"ServerId,omitempty"`
	State                *StateEnum                `json:"State,omitempty"`
	UserCount            *int64                    `json:"UserCount,omitempty"`
}
