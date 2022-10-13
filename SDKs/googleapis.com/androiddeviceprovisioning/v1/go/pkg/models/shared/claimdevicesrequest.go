package shared

type ClaimDevicesRequest struct {
	Claims []PartnerClaim `json:"claims"`
}
