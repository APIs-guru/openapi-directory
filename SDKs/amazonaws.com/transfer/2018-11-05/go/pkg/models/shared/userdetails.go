package shared

type UserDetails struct {
	ServerID  string  `json:"ServerId"`
	SessionID *string `json:"SessionId"`
	UserName  string  `json:"UserName"`
}
