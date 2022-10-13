package shared

type CreateContactMethodRequest struct {
	ContactEndpoint string              `json:"contactEndpoint"`
	Protocol        ContactProtocolEnum `json:"protocol"`
}
