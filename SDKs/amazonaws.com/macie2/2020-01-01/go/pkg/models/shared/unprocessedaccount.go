package shared

type UnprocessedAccount struct {
	AccountID    *string        `json:"accountId"`
	ErrorCode    *ErrorCodeEnum `json:"errorCode"`
	ErrorMessage *string        `json:"errorMessage"`
}
