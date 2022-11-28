package shared

type CompanyTermsStatusEnum string

const (
	CompanyTermsStatusEnumTermsStatusUnspecified CompanyTermsStatusEnum = "TERMS_STATUS_UNSPECIFIED"
	CompanyTermsStatusEnumTermsStatusNotAccepted CompanyTermsStatusEnum = "TERMS_STATUS_NOT_ACCEPTED"
	CompanyTermsStatusEnumTermsStatusAccepted    CompanyTermsStatusEnum = "TERMS_STATUS_ACCEPTED"
	CompanyTermsStatusEnumTermsStatusStale       CompanyTermsStatusEnum = "TERMS_STATUS_STALE"
)

// CompanyInput
// A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
type CompanyInput struct {
	AdminEmails            []string                     `json:"adminEmails,omitempty"`
	CompanyName            *string                      `json:"companyName,omitempty"`
	GoogleWorkspaceAccount *GoogleWorkspaceAccountInput `json:"googleWorkspaceAccount,omitempty"`
	LanguageCode           *string                      `json:"languageCode,omitempty"`
	OwnerEmails            []string                     `json:"ownerEmails,omitempty"`
	SkipWelcomeEmail       *bool                        `json:"skipWelcomeEmail,omitempty"`
}

// Company
// A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
type Company struct {
	AdminEmails            []string                `json:"adminEmails,omitempty"`
	CompanyID              *string                 `json:"companyId,omitempty"`
	CompanyName            *string                 `json:"companyName,omitempty"`
	GoogleWorkspaceAccount *GoogleWorkspaceAccount `json:"googleWorkspaceAccount,omitempty"`
	LanguageCode           *string                 `json:"languageCode,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	OwnerEmails            []string                `json:"ownerEmails,omitempty"`
	SkipWelcomeEmail       *bool                   `json:"skipWelcomeEmail,omitempty"`
	TermsStatus            *CompanyTermsStatusEnum `json:"termsStatus,omitempty"`
}
