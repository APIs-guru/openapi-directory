package shared

// Contact
// A personal contact or escalation plan that Incident Manager engages during an incident.
type Contact struct {
	Alias       string          `json:"Alias"`
	ContactArn  string          `json:"ContactArn"`
	DisplayName *string         `json:"DisplayName,omitempty"`
	Type        ContactTypeEnum `json:"Type"`
}
