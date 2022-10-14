package shared

type GetContactMethodsRequest struct {
	Protocols []ContactProtocolEnum `json:"protocols,omitempty"`
}
