package shared

type User struct {
	Properties *interface{} `json:"properties,omitempty"`
	UserID     string       `json:"userId"`
}
