package shared

type SigninDetailAllowPersonalUsageEnum string

const (
	SigninDetailAllowPersonalUsageEnumAllowPersonalUsageUnspecified SigninDetailAllowPersonalUsageEnum = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
	SigninDetailAllowPersonalUsageEnumPersonalUsageAllowed          SigninDetailAllowPersonalUsageEnum = "PERSONAL_USAGE_ALLOWED"
	SigninDetailAllowPersonalUsageEnumPersonalUsageDisallowed       SigninDetailAllowPersonalUsageEnum = "PERSONAL_USAGE_DISALLOWED"
)

// SigninDetail
// A resource containing sign in details for an enterprise.
type SigninDetail struct {
	AllowPersonalUsage    *SigninDetailAllowPersonalUsageEnum `json:"allowPersonalUsage,omitempty"`
	QrCode                *string                             `json:"qrCode,omitempty"`
	SigninEnrollmentToken *string                             `json:"signinEnrollmentToken,omitempty"`
	SigninURL             *string                             `json:"signinUrl,omitempty"`
}
