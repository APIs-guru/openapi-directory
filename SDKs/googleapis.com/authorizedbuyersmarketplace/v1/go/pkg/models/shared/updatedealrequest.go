package shared

type UpdateDealRequest struct {
	Deal       *Deal   `json:"deal"`
	UpdateMask *string `json:"updateMask"`
}
