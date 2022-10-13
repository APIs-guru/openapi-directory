package shared

type UpdateUserRequest struct {
	AuthData         *UserAuthDataUpdateRequest `json:"authData"`
	AuthMethods      []UserAuthMethod           `json:"authMethods"`
	Email            *string                    `json:"email"`
	Expiration       *ObjectExpiration          `json:"expiration"`
	FirstName        *string                    `json:"firstName"`
	Gender           *string                    `json:"gender"`
	IsLocked         *bool                      `json:"isLocked"`
	LastName         *string                    `json:"lastName"`
	LockStatus       *int32                     `json:"lockStatus"`
	Phone            *string                    `json:"phone"`
	ReceiverLanguage *string                    `json:"receiverLanguage"`
	Title            *string                    `json:"title"`
	UserName         *string                    `json:"userName"`
}
