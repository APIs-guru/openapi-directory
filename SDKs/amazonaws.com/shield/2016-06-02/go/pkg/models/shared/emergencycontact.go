package shared

// EmergencyContact
// Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
type EmergencyContact struct {
	ContactNotes *string `json:"ContactNotes,omitempty"`
	EmailAddress string  `json:"EmailAddress"`
	PhoneNumber  *string `json:"PhoneNumber,omitempty"`
}
