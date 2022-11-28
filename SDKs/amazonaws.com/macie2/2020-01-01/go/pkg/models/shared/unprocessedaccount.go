package shared

// UnprocessedAccount
//
//	<p>Provides information about an account-related request that hasn't been processed.</p>
type UnprocessedAccount struct {
	AccountID    *string        `json:"accountId,omitempty"`
	ErrorCode    *ErrorCodeEnum `json:"errorCode,omitempty"`
	ErrorMessage *string        `json:"errorMessage,omitempty"`
}
