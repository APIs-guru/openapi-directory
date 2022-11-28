package shared

type EnrollmentTokenAllowPersonalUsageEnum string

const (
	EnrollmentTokenAllowPersonalUsageEnumAllowPersonalUsageUnspecified EnrollmentTokenAllowPersonalUsageEnum = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
	EnrollmentTokenAllowPersonalUsageEnumPersonalUsageAllowed          EnrollmentTokenAllowPersonalUsageEnum = "PERSONAL_USAGE_ALLOWED"
	EnrollmentTokenAllowPersonalUsageEnumPersonalUsageDisallowed       EnrollmentTokenAllowPersonalUsageEnum = "PERSONAL_USAGE_DISALLOWED"
)

// EnrollmentToken
// An enrollment token.
type EnrollmentToken struct {
	AdditionalData      *string                                `json:"additionalData,omitempty"`
	AllowPersonalUsage  *EnrollmentTokenAllowPersonalUsageEnum `json:"allowPersonalUsage,omitempty"`
	Duration            *string                                `json:"duration,omitempty"`
	ExpirationTimestamp *string                                `json:"expirationTimestamp,omitempty"`
	Name                *string                                `json:"name,omitempty"`
	OneTimeOnly         *bool                                  `json:"oneTimeOnly,omitempty"`
	PolicyName          *string                                `json:"policyName,omitempty"`
	QrCode              *string                                `json:"qrCode,omitempty"`
	User                *User                                  `json:"user,omitempty"`
	Value               *string                                `json:"value,omitempty"`
}
