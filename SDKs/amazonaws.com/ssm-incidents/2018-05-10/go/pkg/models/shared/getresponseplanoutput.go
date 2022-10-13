package shared

type GetResponsePlanOutput struct {
	Actions          []Action         `json:"actions"`
	Arn              string           `json:"arn"`
	ChatChannel      *ChatChannel     `json:"chatChannel"`
	DisplayName      *string          `json:"displayName"`
	Engagements      []string         `json:"engagements"`
	IncidentTemplate IncidentTemplate `json:"incidentTemplate"`
	Name             string           `json:"name"`
}
