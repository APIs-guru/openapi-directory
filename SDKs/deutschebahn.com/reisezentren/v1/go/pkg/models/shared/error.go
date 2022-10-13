package shared

type Error struct {
	Code    *int32  `json:"code"`
	Message *string `json:"message"`
}
