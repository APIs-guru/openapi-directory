package shared

type BatchUpdateDealsRequest struct {
	Requests []UpdateDealRequest `json:"requests,omitempty"`
}
