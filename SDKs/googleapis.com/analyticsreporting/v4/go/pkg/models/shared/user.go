package shared

type UserTypeEnum string

const (
	UserTypeEnumUserIDTypeUnspecified UserTypeEnum = "USER_ID_TYPE_UNSPECIFIED"
	UserTypeEnumUserID                UserTypeEnum = "USER_ID"
	UserTypeEnumClientID              UserTypeEnum = "CLIENT_ID"
)

// User
// Contains information to identify a particular user uniquely.
type User struct {
	Type   *UserTypeEnum `json:"type,omitempty"`
	UserID *string       `json:"userId,omitempty"`
}
