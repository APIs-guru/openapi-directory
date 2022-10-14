package shared

type AssociationSession struct {
	AccountID     *string  `json:"accountId,omitempty"`
	ID            *string  `json:"id,omitempty"`
	Kind          *string  `json:"kind,omitempty"`
	ProductCodes  []string `json:"productCodes,omitempty"`
	RedirectURL   *string  `json:"redirectUrl,omitempty"`
	Status        *string  `json:"status,omitempty"`
	UserLocale    *string  `json:"userLocale,omitempty"`
	WebsiteLocale *string  `json:"websiteLocale,omitempty"`
	WebsiteURL    *string  `json:"websiteUrl,omitempty"`
}
