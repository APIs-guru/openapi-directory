package shared

type PasswordRequirementsPasswordQualityEnum string

const (
	PasswordRequirementsPasswordQualityEnumPasswordQualityUnspecified PasswordRequirementsPasswordQualityEnum = "PASSWORD_QUALITY_UNSPECIFIED"
	PasswordRequirementsPasswordQualityEnumBiometricWeak              PasswordRequirementsPasswordQualityEnum = "BIOMETRIC_WEAK"
	PasswordRequirementsPasswordQualityEnumSomething                  PasswordRequirementsPasswordQualityEnum = "SOMETHING"
	PasswordRequirementsPasswordQualityEnumNumeric                    PasswordRequirementsPasswordQualityEnum = "NUMERIC"
	PasswordRequirementsPasswordQualityEnumNumericComplex             PasswordRequirementsPasswordQualityEnum = "NUMERIC_COMPLEX"
	PasswordRequirementsPasswordQualityEnumAlphabetic                 PasswordRequirementsPasswordQualityEnum = "ALPHABETIC"
	PasswordRequirementsPasswordQualityEnumAlphanumeric               PasswordRequirementsPasswordQualityEnum = "ALPHANUMERIC"
	PasswordRequirementsPasswordQualityEnumComplex                    PasswordRequirementsPasswordQualityEnum = "COMPLEX"
	PasswordRequirementsPasswordQualityEnumComplexityLow              PasswordRequirementsPasswordQualityEnum = "COMPLEXITY_LOW"
	PasswordRequirementsPasswordQualityEnumComplexityMedium           PasswordRequirementsPasswordQualityEnum = "COMPLEXITY_MEDIUM"
	PasswordRequirementsPasswordQualityEnumComplexityHigh             PasswordRequirementsPasswordQualityEnum = "COMPLEXITY_HIGH"
)

type PasswordRequirementsPasswordScopeEnum string

const (
	PasswordRequirementsPasswordScopeEnumScopeUnspecified PasswordRequirementsPasswordScopeEnum = "SCOPE_UNSPECIFIED"
	PasswordRequirementsPasswordScopeEnumScopeDevice      PasswordRequirementsPasswordScopeEnum = "SCOPE_DEVICE"
	PasswordRequirementsPasswordScopeEnumScopeProfile     PasswordRequirementsPasswordScopeEnum = "SCOPE_PROFILE"
)

type PasswordRequirementsRequirePasswordUnlockEnum string

const (
	PasswordRequirementsRequirePasswordUnlockEnumRequirePasswordUnlockUnspecified PasswordRequirementsRequirePasswordUnlockEnum = "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED"
	PasswordRequirementsRequirePasswordUnlockEnumUseDefaultDeviceTimeout          PasswordRequirementsRequirePasswordUnlockEnum = "USE_DEFAULT_DEVICE_TIMEOUT"
	PasswordRequirementsRequirePasswordUnlockEnumRequireEveryDay                  PasswordRequirementsRequirePasswordUnlockEnum = "REQUIRE_EVERY_DAY"
)

type PasswordRequirementsUnifiedLockSettingsEnum string

const (
	PasswordRequirementsUnifiedLockSettingsEnumUnifiedLockSettingsUnspecified  PasswordRequirementsUnifiedLockSettingsEnum = "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
	PasswordRequirementsUnifiedLockSettingsEnumAllowUnifiedWorkAndPersonalLock PasswordRequirementsUnifiedLockSettingsEnum = "ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK"
	PasswordRequirementsUnifiedLockSettingsEnumRequireSeparateWorkLock         PasswordRequirementsUnifiedLockSettingsEnum = "REQUIRE_SEPARATE_WORK_LOCK"
)

// PasswordRequirements
// Requirements for the password used to unlock a device.
type PasswordRequirements struct {
	MaximumFailedPasswordsForWipe *int32                                         `json:"maximumFailedPasswordsForWipe,omitempty"`
	PasswordExpirationTimeout     *string                                        `json:"passwordExpirationTimeout,omitempty"`
	PasswordHistoryLength         *int32                                         `json:"passwordHistoryLength,omitempty"`
	PasswordMinimumLength         *int32                                         `json:"passwordMinimumLength,omitempty"`
	PasswordMinimumLetters        *int32                                         `json:"passwordMinimumLetters,omitempty"`
	PasswordMinimumLowerCase      *int32                                         `json:"passwordMinimumLowerCase,omitempty"`
	PasswordMinimumNonLetter      *int32                                         `json:"passwordMinimumNonLetter,omitempty"`
	PasswordMinimumNumeric        *int32                                         `json:"passwordMinimumNumeric,omitempty"`
	PasswordMinimumSymbols        *int32                                         `json:"passwordMinimumSymbols,omitempty"`
	PasswordMinimumUpperCase      *int32                                         `json:"passwordMinimumUpperCase,omitempty"`
	PasswordQuality               *PasswordRequirementsPasswordQualityEnum       `json:"passwordQuality,omitempty"`
	PasswordScope                 *PasswordRequirementsPasswordScopeEnum         `json:"passwordScope,omitempty"`
	RequirePasswordUnlock         *PasswordRequirementsRequirePasswordUnlockEnum `json:"requirePasswordUnlock,omitempty"`
	UnifiedLockSettings           *PasswordRequirementsUnifiedLockSettingsEnum   `json:"unifiedLockSettings,omitempty"`
}
