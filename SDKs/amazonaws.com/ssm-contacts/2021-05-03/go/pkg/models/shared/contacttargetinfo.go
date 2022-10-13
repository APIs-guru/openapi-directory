package shared

type ContactTargetInfo struct {
	ContactID   *string `json:"ContactId"`
	IsEssential bool    `json:"IsEssential"`
}
