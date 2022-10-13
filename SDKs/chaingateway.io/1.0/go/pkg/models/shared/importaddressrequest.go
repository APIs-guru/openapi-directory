package shared

type ImportAddressRequest struct {
	Content  Content `json:"content"`
	Filename string  `json:"filename"`
	Password string  `json:"password"`
}
