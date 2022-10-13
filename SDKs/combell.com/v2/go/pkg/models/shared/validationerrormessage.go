package shared

type ValidationErrorMessage struct {
	ErrorCode *string `json:"error_code"`
	ErrorText *string `json:"error_text"`
}
