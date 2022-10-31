package shared

type GetResponsePlanOutput struct {
	Actions          []Action         `json:"actions,omitempty"`
	Arn              string           `json:"arn"`
	ChatChannel      *ChatChannel     `json:"chatChannel,omitempty"`
	DisplayName      *string          `json:"displayName,omitempty"`
	Engagements      []string         `json:"engagements,omitempty"`
	IncidentTemplate IncidentTemplate `json:"incidentTemplate"`
	Name             string           `json:"name"`
}
