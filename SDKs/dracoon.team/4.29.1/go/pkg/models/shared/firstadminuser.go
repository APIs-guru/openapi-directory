package shared

// FirstAdminUser
// First administrator user
type FirstAdminUser struct {
	AuthData              *UserAuthData    `json:"authData,omitempty"`
	AuthMethods           []UserAuthMethod `json:"authMethods,omitempty"`
	Email                 *string          `json:"email,omitempty"`
	FirstName             string           `json:"firstName"`
	Gender                *string          `json:"gender,omitempty"`
	Language              *string          `json:"language,omitempty"`
	LastName              string           `json:"lastName"`
	Login                 *string          `json:"login,omitempty"`
	NeedsToChangePassword *bool            `json:"needsToChangePassword,omitempty"`
	NeedsToChangeUserName *bool            `json:"needsToChangeUserName,omitempty"`
	NotifyUser            *bool            `json:"notifyUser,omitempty"`
	Password              *string          `json:"password,omitempty"`
	Phone                 *string          `json:"phone,omitempty"`
	ReceiverLanguage      *string          `json:"receiverLanguage,omitempty"`
	Title                 *string          `json:"title,omitempty"`
	UserName              *string          `json:"userName,omitempty"`
}
