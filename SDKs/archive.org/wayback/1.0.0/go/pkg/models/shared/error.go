package shared

type Error struct {
	Code    *int64  `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
