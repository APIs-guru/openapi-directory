package shared

type StartEngagementRequest struct {
	ContactID        string  `json:"ContactId"`
	Content          string  `json:"Content"`
	IdempotencyToken *string `json:"IdempotencyToken"`
	IncidentID       *string `json:"IncidentId"`
	PublicContent    *string `json:"PublicContent"`
	PublicSubject    *string `json:"PublicSubject"`
	Sender           string  `json:"Sender"`
	Subject          string  `json:"Subject"`
}
