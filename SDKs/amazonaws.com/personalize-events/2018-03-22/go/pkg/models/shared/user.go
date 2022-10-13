package shared

type User struct {
	Properties *interface{} `json:"properties"`
	UserID     string       `json:"userId"`
}
