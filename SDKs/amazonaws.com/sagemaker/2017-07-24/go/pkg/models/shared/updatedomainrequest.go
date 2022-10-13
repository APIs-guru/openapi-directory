package shared

type UpdateDomainRequest struct {
	DefaultUserSettings *UserSettings `json:"DefaultUserSettings"`
	DomainID            string        `json:"DomainId"`
}
