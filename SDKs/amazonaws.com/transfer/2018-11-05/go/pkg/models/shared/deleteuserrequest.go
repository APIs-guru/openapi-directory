package shared

type DeleteUserRequest struct {
	ServerID string `json:"ServerId"`
	UserName string `json:"UserName"`
}
