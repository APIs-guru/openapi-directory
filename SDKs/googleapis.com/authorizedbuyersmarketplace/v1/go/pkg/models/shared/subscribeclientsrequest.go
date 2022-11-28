package shared

// SubscribeClientsRequest
// Request message for SubscribeAuctionPackageClients.
type SubscribeClientsRequest struct {
	Clients []string `json:"clients,omitempty"`
}
