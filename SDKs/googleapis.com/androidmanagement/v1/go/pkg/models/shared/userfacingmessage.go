package shared

type UserFacingMessage struct {
	DefaultMessage    *string           `json:"defaultMessage"`
	LocalizedMessages map[string]string `json:"localizedMessages"`
}
