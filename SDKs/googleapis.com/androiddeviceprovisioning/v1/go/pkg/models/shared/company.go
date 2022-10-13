package shared

type CompanyTermsStatusEnum string

const (
	CompanyTermsStatusEnumTermsStatusUnspecified CompanyTermsStatusEnum = "TERMS_STATUS_UNSPECIFIED"
	CompanyTermsStatusEnumTermsStatusNotAccepted CompanyTermsStatusEnum = "TERMS_STATUS_NOT_ACCEPTED"
	CompanyTermsStatusEnumTermsStatusAccepted    CompanyTermsStatusEnum = "TERMS_STATUS_ACCEPTED"
	CompanyTermsStatusEnumTermsStatusStale       CompanyTermsStatusEnum = "TERMS_STATUS_STALE"
)

type Company struct {
	AdminEmails      []string                `json:"adminEmails"`
	CompanyID        *string                 `json:"companyId"`
	CompanyName      *string                 `json:"companyName"`
	LanguageCode     *string                 `json:"languageCode"`
	Name             *string                 `json:"name"`
	OwnerEmails      []string                `json:"ownerEmails"`
	SkipWelcomeEmail *bool                   `json:"skipWelcomeEmail"`
	TermsStatus      *CompanyTermsStatusEnum `json:"termsStatus"`
}
