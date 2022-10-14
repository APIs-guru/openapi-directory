package shared

type TestIdentityProviderRequest struct {
	ServerID       string        `json:"ServerId"`
	ServerProtocol *ProtocolEnum `json:"ServerProtocol,omitempty"`
	SourceIP       *string       `json:"SourceIp,omitempty"`
	UserName       string        `json:"UserName"`
	UserPassword   *string       `json:"UserPassword,omitempty"`
}
