package shared

type StopEngagementRequest struct {
	EngagementID string  `json:"EngagementId"`
	Reason       *string `json:"Reason"`
}
