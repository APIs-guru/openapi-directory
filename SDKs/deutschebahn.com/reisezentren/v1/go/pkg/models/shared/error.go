package shared

type Error struct {
	Code    *int32  `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
