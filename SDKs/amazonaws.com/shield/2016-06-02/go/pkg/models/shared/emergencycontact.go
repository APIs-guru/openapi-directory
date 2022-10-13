package shared

type EmergencyContact struct {
	ContactNotes *string `json:"ContactNotes"`
	EmailAddress string  `json:"EmailAddress"`
	PhoneNumber  *string `json:"PhoneNumber"`
}
