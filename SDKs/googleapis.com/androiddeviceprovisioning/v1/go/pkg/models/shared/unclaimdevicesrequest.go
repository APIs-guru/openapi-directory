package shared

// UnclaimDevicesRequest
// Request to unclaim devices asynchronously in batch.
type UnclaimDevicesRequest struct {
	Unclaims []PartnerUnclaim `json:"unclaims,omitempty"`
}
