package shared

type ClientUserStatusEnum string

const (
	ClientUserStatusEnumUserStatusUnspecified ClientUserStatusEnum = "USER_STATUS_UNSPECIFIED"
	ClientUserStatusEnumPending               ClientUserStatusEnum = "PENDING"
	ClientUserStatusEnumActive                ClientUserStatusEnum = "ACTIVE"
	ClientUserStatusEnumDisabled              ClientUserStatusEnum = "DISABLED"
)

type ClientUser struct {
	ClientAccountID *string               `json:"clientAccountId,omitempty"`
	Email           *string               `json:"email,omitempty"`
	Status          *ClientUserStatusEnum `json:"status,omitempty"`
	UserID          *string               `json:"userId,omitempty"`
}
