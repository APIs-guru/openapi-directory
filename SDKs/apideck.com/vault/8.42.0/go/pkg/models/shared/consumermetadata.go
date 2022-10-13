package shared

type ConsumerMetadata struct {
	AccountName *string `json:"account_name"`
	Email       *string `json:"email"`
	Image       *string `json:"image"`
	UserName    *string `json:"user_name"`
}
