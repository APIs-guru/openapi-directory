package shared

type Error struct {
	Detail    *string `json:"detail"`
	ErrorCode *int32  `json:"error_code"`
	Message   *string `json:"message"`
}
