package shared

type EmailTypeEnum string

const (
	EmailTypeEnumPrimary   EmailTypeEnum = "primary"
	EmailTypeEnumSecondary EmailTypeEnum = "secondary"
	EmailTypeEnumWork      EmailTypeEnum = "work"
	EmailTypeEnumPersonal  EmailTypeEnum = "personal"
	EmailTypeEnumBilling   EmailTypeEnum = "billing"
	EmailTypeEnumOther     EmailTypeEnum = "other"
)

type Email struct {
	Email string         `json:"email"`
	ID    *string        `json:"id"`
	Type  *EmailTypeEnum `json:"type"`
}
