package shared

type CreateFirewallDomainListRequest struct {
	CreatorRequestID string `json:"CreatorRequestId"`
	Name             string `json:"Name"`
	Tags             []Tag  `json:"Tags"`
}
