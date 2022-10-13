package shared

type EnterpriseEnabledNotificationTypesEnum string

const (
	EnterpriseEnabledNotificationTypesEnumNotificationTypeUnspecified EnterpriseEnabledNotificationTypesEnum = "NOTIFICATION_TYPE_UNSPECIFIED"
	EnterpriseEnabledNotificationTypesEnumEnrollment                  EnterpriseEnabledNotificationTypesEnum = "ENROLLMENT"
	EnterpriseEnabledNotificationTypesEnumComplianceReport            EnterpriseEnabledNotificationTypesEnum = "COMPLIANCE_REPORT"
	EnterpriseEnabledNotificationTypesEnumStatusReport                EnterpriseEnabledNotificationTypesEnum = "STATUS_REPORT"
	EnterpriseEnabledNotificationTypesEnumCommand                     EnterpriseEnabledNotificationTypesEnum = "COMMAND"
	EnterpriseEnabledNotificationTypesEnumUsageLogs                   EnterpriseEnabledNotificationTypesEnum = "USAGE_LOGS"
)

type Enterprise struct {
	AppAutoApprovalEnabled   *bool                                    `json:"appAutoApprovalEnabled"`
	ContactInfo              *ContactInfo                             `json:"contactInfo"`
	EnabledNotificationTypes []EnterpriseEnabledNotificationTypesEnum `json:"enabledNotificationTypes"`
	EnterpriseDisplayName    *string                                  `json:"enterpriseDisplayName"`
	Logo                     *ExternalData                            `json:"logo"`
	Name                     *string                                  `json:"name"`
	PrimaryColor             *int32                                   `json:"primaryColor"`
	PubsubTopic              *string                                  `json:"pubsubTopic"`
	SigninDetails            []SigninDetail                           `json:"signinDetails"`
	TermsAndConditions       []TermsAndConditions                     `json:"termsAndConditions"`
}
