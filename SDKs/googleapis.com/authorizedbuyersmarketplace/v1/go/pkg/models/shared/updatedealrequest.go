package shared

// UpdateDealRequestInput
// Request message for updating the deal at the given revision number.
type UpdateDealRequestInput struct {
	Deal       *DealInput `json:"deal,omitempty"`
	UpdateMask *string    `json:"updateMask,omitempty"`
}
