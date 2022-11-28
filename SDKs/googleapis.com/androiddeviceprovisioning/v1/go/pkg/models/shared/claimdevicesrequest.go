package shared

// ClaimDevicesRequest
// Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
type ClaimDevicesRequest struct {
	Claims []PartnerClaim `json:"claims,omitempty"`
}
