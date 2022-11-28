package shared

// UserResponse
// The type that defines the fields for the getUser method.
type UserResponse struct {
	AccountType               *string            `json:"accountType,omitempty"`
	BusinessAccount           *BusinessAccount   `json:"businessAccount,omitempty"`
	IndividualAccount         *IndividualAccount `json:"individualAccount,omitempty"`
	RegistrationMarketplaceID *string            `json:"registrationMarketplaceId,omitempty"`
	Status                    *string            `json:"status,omitempty"`
	UserID                    *string            `json:"userId,omitempty"`
	Username                  *string            `json:"username,omitempty"`
}
