package shared

type UnprocessedAccount struct {
	AccountID    *string        `json:"accountId,omitempty"`
	ErrorCode    *ErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage *string        `json:"errorMessage,omitempty"`
}
