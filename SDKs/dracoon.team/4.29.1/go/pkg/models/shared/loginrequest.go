package shared

type LoginRequestAuthTypeEnum string

const (
	LoginRequestAuthTypeEnumBasic           LoginRequestAuthTypeEnum = "basic"
	LoginRequestAuthTypeEnumActiveDirectory LoginRequestAuthTypeEnum = "active_directory"
	LoginRequestAuthTypeEnumRadius          LoginRequestAuthTypeEnum = "radius"
)

// LoginRequest
// Request model for performing an authentication
type LoginRequest struct {
	AuthType *LoginRequestAuthTypeEnum `json:"authType,omitempty"`
	Language *string                   `json:"language,omitempty"`
	Login    *string                   `json:"login,omitempty"`
	Password string                    `json:"password"`
	State    *string                   `json:"state,omitempty"`
	Token    *string                   `json:"token,omitempty"`
	UserName *string                   `json:"userName,omitempty"`
}
