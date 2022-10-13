package shared

type AssociationSession struct {
	AccountID     *string  `json:"accountId"`
	ID            *string  `json:"id"`
	Kind          *string  `json:"kind"`
	ProductCodes  []string `json:"productCodes"`
	RedirectURL   *string  `json:"redirectUrl"`
	Status        *string  `json:"status"`
	UserLocale    *string  `json:"userLocale"`
	WebsiteLocale *string  `json:"websiteLocale"`
	WebsiteURL    *string  `json:"websiteUrl"`
}
