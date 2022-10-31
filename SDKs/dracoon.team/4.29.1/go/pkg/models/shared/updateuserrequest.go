package shared



type UpdateUserRequest struct {
    AuthData *UserAuthDataUpdateRequest `json:"authData,omitempty"`
    AuthMethods []UserAuthMethod `json:"authMethods,omitempty"`
    Email *string `json:"email,omitempty"`
    Expiration *ObjectExpiration `json:"expiration,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    Gender *string `json:"gender,omitempty"`
    IsLocked *bool `json:"isLocked,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    LockStatus *int32 `json:"lockStatus,omitempty"`
    Phone *string `json:"phone,omitempty"`
    ReceiverLanguage *string `json:"receiverLanguage,omitempty"`
    Title *string `json:"title,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

