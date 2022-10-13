package shared

type SendBonusRequest struct {
	AssignmentID       string  `json:"AssignmentId"`
	BonusAmount        string  `json:"BonusAmount"`
	Reason             string  `json:"Reason"`
	UniqueRequestToken *string `json:"UniqueRequestToken"`
	WorkerID           string  `json:"WorkerId"`
}
