package shared

// UnsubscribeClientsRequest
// Request message for UnsubscribeAuctionPackage.
type UnsubscribeClientsRequest struct {
	Clients []string `json:"clients,omitempty"`
}
