package shared

type ClientUserStatusEnum string

const (
	ClientUserStatusEnumUserStatusUnspecified ClientUserStatusEnum = "USER_STATUS_UNSPECIFIED"
	ClientUserStatusEnumPending               ClientUserStatusEnum = "PENDING"
	ClientUserStatusEnumActive                ClientUserStatusEnum = "ACTIVE"
	ClientUserStatusEnumDisabled              ClientUserStatusEnum = "DISABLED"
)

type ClientUser struct {
	ClientAccountID *string               `json:"clientAccountId"`
	Email           *string               `json:"email"`
	Status          *ClientUserStatusEnum `json:"status"`
	UserID          *string               `json:"userId"`
}
