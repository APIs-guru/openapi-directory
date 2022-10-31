package shared




type CompanyTermsStatusEnum string

const (
    CompanyTermsStatusEnumTermsStatusUnspecified CompanyTermsStatusEnum = "TERMS_STATUS_UNSPECIFIED"
CompanyTermsStatusEnumTermsStatusNotAccepted CompanyTermsStatusEnum = "TERMS_STATUS_NOT_ACCEPTED"
CompanyTermsStatusEnumTermsStatusAccepted CompanyTermsStatusEnum = "TERMS_STATUS_ACCEPTED"
CompanyTermsStatusEnumTermsStatusStale CompanyTermsStatusEnum = "TERMS_STATUS_STALE"
)


type Company struct {
    AdminEmails []string `json:"adminEmails,omitempty"`
    CompanyID *string `json:"companyId,omitempty"`
    CompanyName *string `json:"companyName,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    Name *string `json:"name,omitempty"`
    OwnerEmails []string `json:"ownerEmails,omitempty"`
    SkipWelcomeEmail *bool `json:"skipWelcomeEmail,omitempty"`
    TermsStatus *CompanyTermsStatusEnum `json:"termsStatus,omitempty"`
    
}

