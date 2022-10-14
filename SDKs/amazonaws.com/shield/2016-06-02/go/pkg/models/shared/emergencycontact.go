package shared

type EmergencyContact struct {
	ContactNotes *string `json:"ContactNotes,omitempty"`
	EmailAddress string  `json:"EmailAddress"`
	PhoneNumber  *string `json:"PhoneNumber,omitempty"`
}
