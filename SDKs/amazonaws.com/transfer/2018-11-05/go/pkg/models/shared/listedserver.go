package shared

type ListedServer struct {
	Arn                  string                    `json:"Arn"`
	Domain               *DomainEnum               `json:"Domain"`
	EndpointType         *EndpointTypeEnum         `json:"EndpointType"`
	IdentityProviderType *IdentityProviderTypeEnum `json:"IdentityProviderType"`
	LoggingRole          *string                   `json:"LoggingRole"`
	ServerID             *string                   `json:"ServerId"`
	State                *StateEnum                `json:"State"`
	UserCount            *int64                    `json:"UserCount"`
}
