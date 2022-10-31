package shared




type UserTypeEnum string

const (
    UserTypeEnumUserIDTypeUnspecified UserTypeEnum = "USER_ID_TYPE_UNSPECIFIED"
UserTypeEnumUserID UserTypeEnum = "USER_ID"
UserTypeEnumClientID UserTypeEnum = "CLIENT_ID"
)


type User struct {
    Type *UserTypeEnum `json:"type,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

