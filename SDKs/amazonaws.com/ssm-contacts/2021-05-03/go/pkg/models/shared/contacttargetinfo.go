package shared

// ContactTargetInfo
// The contact that Incident Manager is engaging during an incident.
type ContactTargetInfo struct {
	ContactID   *string `json:"ContactId,omitempty"`
	IsEssential bool    `json:"IsEssential"`
}
