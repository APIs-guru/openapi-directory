package shared

type Mailbox struct {
	ActualSize *int32  `json:"actual_size"`
	MaxSize    *int32  `json:"max_size"`
	Name       *string `json:"name"`
}
