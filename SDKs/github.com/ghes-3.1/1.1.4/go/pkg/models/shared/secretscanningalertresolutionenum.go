package shared




type SecretScanningAlertResolutionEnum string

const (
    SecretScanningAlertResolutionEnumFalsePositive SecretScanningAlertResolutionEnum = "false_positive"
SecretScanningAlertResolutionEnumWontFix SecretScanningAlertResolutionEnum = "wont_fix"
SecretScanningAlertResolutionEnumRevoked SecretScanningAlertResolutionEnum = "revoked"
SecretScanningAlertResolutionEnumUsedInTests SecretScanningAlertResolutionEnum = "used_in_tests"
)


