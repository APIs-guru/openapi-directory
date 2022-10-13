package shared

type UpdateError struct {
	ErrorCode    *string `json:"ErrorCode"`
	ErrorMessage *string `json:"ErrorMessage"`
}
