package shared

type CreateUserRequest struct {
	AuthData              *UserAuthData     `json:"authData"`
	AuthMethods           []UserAuthMethod  `json:"authMethods"`
	Email                 *string           `json:"email"`
	Expiration            *ObjectExpiration `json:"expiration"`
	FirstName             string            `json:"firstName"`
	Gender                *string           `json:"gender"`
	IsNonmemberViewer     *bool             `json:"isNonmemberViewer"`
	LastName              string            `json:"lastName"`
	Login                 *string           `json:"login"`
	NeedsToChangePassword *bool             `json:"needsToChangePassword"`
	NotifyUser            *bool             `json:"notifyUser"`
	Password              *string           `json:"password"`
	Phone                 *string           `json:"phone"`
	ReceiverLanguage      *string           `json:"receiverLanguage"`
	Title                 *string           `json:"title"`
	UserName              *string           `json:"userName"`
}
