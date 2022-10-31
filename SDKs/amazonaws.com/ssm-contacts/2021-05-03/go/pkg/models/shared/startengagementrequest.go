package shared



type StartEngagementRequest struct {
    ContactID string `json:"ContactId"`
    Content string `json:"Content"`
    IdempotencyToken *string `json:"IdempotencyToken,omitempty"`
    IncidentID *string `json:"IncidentId,omitempty"`
    PublicContent *string `json:"PublicContent,omitempty"`
    PublicSubject *string `json:"PublicSubject,omitempty"`
    Sender string `json:"Sender"`
    Subject string `json:"Subject"`
    
}

