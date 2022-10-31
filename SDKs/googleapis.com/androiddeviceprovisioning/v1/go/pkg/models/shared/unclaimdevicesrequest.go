package shared

type UnclaimDevicesRequest struct {
	Unclaims []PartnerUnclaim `json:"unclaims,omitempty"`
}
