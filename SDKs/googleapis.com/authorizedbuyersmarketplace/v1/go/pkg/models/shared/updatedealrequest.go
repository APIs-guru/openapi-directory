package shared



type UpdateDealRequest struct {
    Deal *Deal `json:"deal,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

