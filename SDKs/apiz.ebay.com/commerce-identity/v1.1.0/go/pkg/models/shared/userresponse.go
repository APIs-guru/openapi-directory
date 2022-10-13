package shared

type UserResponse struct {
	AccountType               *string            `json:"accountType"`
	BusinessAccount           *BusinessAccount   `json:"businessAccount"`
	IndividualAccount         *IndividualAccount `json:"individualAccount"`
	RegistrationMarketplaceID *string            `json:"registrationMarketplaceId"`
	Status                    *string            `json:"status"`
	UserID                    *string            `json:"userId"`
	Username                  *string            `json:"username"`
}
