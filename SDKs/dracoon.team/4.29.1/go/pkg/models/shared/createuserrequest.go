package shared



type CreateUserRequest struct {
    AuthData *UserAuthData `json:"authData,omitempty"`
    AuthMethods []UserAuthMethod `json:"authMethods,omitempty"`
    Email *string `json:"email,omitempty"`
    Expiration *ObjectExpiration `json:"expiration,omitempty"`
    FirstName string `json:"firstName"`
    Gender *string `json:"gender,omitempty"`
    IsNonmemberViewer *bool `json:"isNonmemberViewer,omitempty"`
    LastName string `json:"lastName"`
    Login *string `json:"login,omitempty"`
    NeedsToChangePassword *bool `json:"needsToChangePassword,omitempty"`
    NotifyUser *bool `json:"notifyUser,omitempty"`
    Password *string `json:"password,omitempty"`
    Phone *string `json:"phone,omitempty"`
    ReceiverLanguage *string `json:"receiverLanguage,omitempty"`
    Title *string `json:"title,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

