package shared




type EnterpriseEnabledNotificationTypesEnum string

const (
    EnterpriseEnabledNotificationTypesEnumNotificationTypeUnspecified EnterpriseEnabledNotificationTypesEnum = "NOTIFICATION_TYPE_UNSPECIFIED"
EnterpriseEnabledNotificationTypesEnumEnrollment EnterpriseEnabledNotificationTypesEnum = "ENROLLMENT"
EnterpriseEnabledNotificationTypesEnumComplianceReport EnterpriseEnabledNotificationTypesEnum = "COMPLIANCE_REPORT"
EnterpriseEnabledNotificationTypesEnumStatusReport EnterpriseEnabledNotificationTypesEnum = "STATUS_REPORT"
EnterpriseEnabledNotificationTypesEnumCommand EnterpriseEnabledNotificationTypesEnum = "COMMAND"
EnterpriseEnabledNotificationTypesEnumUsageLogs EnterpriseEnabledNotificationTypesEnum = "USAGE_LOGS"
)


type Enterprise struct {
    AppAutoApprovalEnabled *bool `json:"appAutoApprovalEnabled,omitempty"`
    ContactInfo *ContactInfo `json:"contactInfo,omitempty"`
    EnabledNotificationTypes []EnterpriseEnabledNotificationTypesEnum `json:"enabledNotificationTypes,omitempty"`
    EnterpriseDisplayName *string `json:"enterpriseDisplayName,omitempty"`
    Logo *ExternalData `json:"logo,omitempty"`
    Name *string `json:"name,omitempty"`
    PrimaryColor *int32 `json:"primaryColor,omitempty"`
    PubsubTopic *string `json:"pubsubTopic,omitempty"`
    SigninDetails []SigninDetail `json:"signinDetails,omitempty"`
    TermsAndConditions []TermsAndConditions `json:"termsAndConditions,omitempty"`
    
}

