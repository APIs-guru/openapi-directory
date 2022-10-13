package shared

type AccessLevel struct {
	Basic       *BasicLevel  `json:"basic"`
	Custom      *CustomLevel `json:"custom"`
	Description *string      `json:"description"`
	Name        *string      `json:"name"`
	Title       *string      `json:"title"`
}
