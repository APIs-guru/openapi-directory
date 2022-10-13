package shared

type PhoneNumberTypeEnum string

const (
	PhoneNumberTypeEnumPrimary      PhoneNumberTypeEnum = "primary"
	PhoneNumberTypeEnumSecondary    PhoneNumberTypeEnum = "secondary"
	PhoneNumberTypeEnumHome         PhoneNumberTypeEnum = "home"
	PhoneNumberTypeEnumWork         PhoneNumberTypeEnum = "work"
	PhoneNumberTypeEnumOffice       PhoneNumberTypeEnum = "office"
	PhoneNumberTypeEnumMobile       PhoneNumberTypeEnum = "mobile"
	PhoneNumberTypeEnumAssistant    PhoneNumberTypeEnum = "assistant"
	PhoneNumberTypeEnumFax          PhoneNumberTypeEnum = "fax"
	PhoneNumberTypeEnumDirectDialIn PhoneNumberTypeEnum = "direct-dial-in"
	PhoneNumberTypeEnumPersonal     PhoneNumberTypeEnum = "personal"
	PhoneNumberTypeEnumOther        PhoneNumberTypeEnum = "other"
)

type PhoneNumber struct {
	AreaCode    *string              `json:"area_code"`
	CountryCode *string              `json:"country_code"`
	Extension   *string              `json:"extension"`
	ID          *string              `json:"id"`
	Number      string               `json:"number"`
	Type        *PhoneNumberTypeEnum `json:"type"`
}
