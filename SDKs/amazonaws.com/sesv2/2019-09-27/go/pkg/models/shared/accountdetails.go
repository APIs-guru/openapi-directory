package shared

// AccountDetails
// An object that contains information about your account details.
type AccountDetails struct {
	AdditionalContactEmailAddresses []string             `json:"AdditionalContactEmailAddresses,omitempty"`
	ContactLanguage                 *ContactLanguageEnum `json:"ContactLanguage,omitempty"`
	MailType                        *MailTypeEnum        `json:"MailType,omitempty"`
	ReviewDetails                   *ReviewDetails       `json:"ReviewDetails,omitempty"`
	UseCaseDescription              *string              `json:"UseCaseDescription,omitempty"`
	WebsiteURL                      *string              `json:"WebsiteURL,omitempty"`
}
