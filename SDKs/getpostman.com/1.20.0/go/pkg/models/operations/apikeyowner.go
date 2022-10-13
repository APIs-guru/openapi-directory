package operations

type APIKeyOwner200ApplicationJSONOperations struct {
	Limit   *float64 `json:"limit"`
	Name    *string  `json:"name"`
	Overage *float64 `json:"overage"`
	Usage   *float64 `json:"usage"`
}

type APIKeyOwner200ApplicationJSONUser struct {
	Avatar   *string `json:"avatar"`
	Email    *string `json:"email"`
	FullName *string `json:"fullName"`
	ID       *string `json:"id"`
	IsPublic *bool   `json:"isPublic"`
	Username *string `json:"username"`
}

type APIKeyOwner200ApplicationJSON struct {
	Operations []APIKeyOwner200ApplicationJSONOperations `json:"operations"`
	User       *APIKeyOwner200ApplicationJSONUser        `json:"user"`
}

type APIKeyOwnerResponse struct {
	ContentType                         string
	StatusCode                          int64
	APIKeyOwner200ApplicationJSONObject *APIKeyOwner200ApplicationJSON
}
