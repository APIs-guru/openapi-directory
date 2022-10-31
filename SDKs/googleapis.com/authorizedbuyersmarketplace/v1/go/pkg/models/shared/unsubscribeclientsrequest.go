package shared

type UnsubscribeClientsRequest struct {
	Clients []string `json:"clients,omitempty"`
}
