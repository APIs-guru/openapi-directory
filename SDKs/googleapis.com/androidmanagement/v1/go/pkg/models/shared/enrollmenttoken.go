package shared

type EnrollmentTokenAllowPersonalUsageEnum string

const (
	EnrollmentTokenAllowPersonalUsageEnumAllowPersonalUsageUnspecified EnrollmentTokenAllowPersonalUsageEnum = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
	EnrollmentTokenAllowPersonalUsageEnumPersonalUsageAllowed          EnrollmentTokenAllowPersonalUsageEnum = "PERSONAL_USAGE_ALLOWED"
	EnrollmentTokenAllowPersonalUsageEnumPersonalUsageDisallowed       EnrollmentTokenAllowPersonalUsageEnum = "PERSONAL_USAGE_DISALLOWED"
)

type EnrollmentToken struct {
	AdditionalData      *string                                `json:"additionalData"`
	AllowPersonalUsage  *EnrollmentTokenAllowPersonalUsageEnum `json:"allowPersonalUsage"`
	Duration            *string                                `json:"duration"`
	ExpirationTimestamp *string                                `json:"expirationTimestamp"`
	Name                *string                                `json:"name"`
	OneTimeOnly         *bool                                  `json:"oneTimeOnly"`
	PolicyName          *string                                `json:"policyName"`
	QrCode              *string                                `json:"qrCode"`
	User                *User                                  `json:"user"`
	Value               *string                                `json:"value"`
}
