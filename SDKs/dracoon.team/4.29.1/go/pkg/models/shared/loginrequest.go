package shared

type LoginRequestAuthTypeEnum string

const (
	LoginRequestAuthTypeEnumBasic           LoginRequestAuthTypeEnum = "basic"
	LoginRequestAuthTypeEnumActiveDirectory LoginRequestAuthTypeEnum = "active_directory"
	LoginRequestAuthTypeEnumRadius          LoginRequestAuthTypeEnum = "radius"
)

type LoginRequest struct {
	AuthType *LoginRequestAuthTypeEnum `json:"authType"`
	Language *string                   `json:"language"`
	Login    *string                   `json:"login"`
	Password string                    `json:"password"`
	State    *string                   `json:"state"`
	Token    *string                   `json:"token"`
	UserName *string                   `json:"userName"`
}
