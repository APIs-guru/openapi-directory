package shared

type TestIdentityProviderRequest struct {
	ServerID       string        `json:"ServerId"`
	ServerProtocol *ProtocolEnum `json:"ServerProtocol"`
	SourceIP       *string       `json:"SourceIp"`
	UserName       string        `json:"UserName"`
	UserPassword   *string       `json:"UserPassword"`
}
