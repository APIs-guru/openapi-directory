package shared

type TermsAndConditions struct {
	Content *UserFacingMessage `json:"content"`
	Header  *UserFacingMessage `json:"header"`
}
