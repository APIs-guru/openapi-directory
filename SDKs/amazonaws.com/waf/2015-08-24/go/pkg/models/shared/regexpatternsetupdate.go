package shared

type RegexPatternSetUpdate struct {
	Action             ChangeActionEnum `json:"Action"`
	RegexPatternString string           `json:"RegexPatternString"`
}
