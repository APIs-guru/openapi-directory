package shared

type FirstAdminUser struct {
	AuthData              *UserAuthData    `json:"authData"`
	AuthMethods           []UserAuthMethod `json:"authMethods"`
	Email                 *string          `json:"email"`
	FirstName             string           `json:"firstName"`
	Gender                *string          `json:"gender"`
	Language              *string          `json:"language"`
	LastName              string           `json:"lastName"`
	Login                 *string          `json:"login"`
	NeedsToChangePassword *bool            `json:"needsToChangePassword"`
	NeedsToChangeUserName *bool            `json:"needsToChangeUserName"`
	NotifyUser            *bool            `json:"notifyUser"`
	Password              *string          `json:"password"`
	Phone                 *string          `json:"phone"`
	ReceiverLanguage      *string          `json:"receiverLanguage"`
	Title                 *string          `json:"title"`
	UserName              *string          `json:"userName"`
}
