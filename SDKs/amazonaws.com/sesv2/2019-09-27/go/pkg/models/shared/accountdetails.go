package shared

type AccountDetails struct {
	AdditionalContactEmailAddresses []string             `json:"AdditionalContactEmailAddresses"`
	ContactLanguage                 *ContactLanguageEnum `json:"ContactLanguage"`
	MailType                        *MailTypeEnum        `json:"MailType"`
	ReviewDetails                   *ReviewDetails       `json:"ReviewDetails"`
	UseCaseDescription              *string              `json:"UseCaseDescription"`
	WebsiteURL                      *string              `json:"WebsiteURL"`
}
