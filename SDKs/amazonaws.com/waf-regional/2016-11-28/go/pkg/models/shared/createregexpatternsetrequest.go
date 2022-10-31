package shared

type CreateRegexPatternSetRequest struct {
	ChangeToken string `json:"ChangeToken"`
	Name        string `json:"Name"`
}
