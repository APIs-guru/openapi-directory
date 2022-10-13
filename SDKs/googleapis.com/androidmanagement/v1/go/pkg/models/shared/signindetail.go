package shared

type SigninDetailAllowPersonalUsageEnum string

const (
	SigninDetailAllowPersonalUsageEnumAllowPersonalUsageUnspecified SigninDetailAllowPersonalUsageEnum = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
	SigninDetailAllowPersonalUsageEnumPersonalUsageAllowed          SigninDetailAllowPersonalUsageEnum = "PERSONAL_USAGE_ALLOWED"
	SigninDetailAllowPersonalUsageEnumPersonalUsageDisallowed       SigninDetailAllowPersonalUsageEnum = "PERSONAL_USAGE_DISALLOWED"
)

type SigninDetail struct {
	AllowPersonalUsage    *SigninDetailAllowPersonalUsageEnum `json:"allowPersonalUsage"`
	QrCode                *string                             `json:"qrCode"`
	SigninEnrollmentToken *string                             `json:"signinEnrollmentToken"`
	SigninURL             *string                             `json:"signinUrl"`
}
