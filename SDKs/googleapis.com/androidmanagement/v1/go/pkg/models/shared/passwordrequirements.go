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

type PasswordRequirements struct {
	MaximumFailedPasswordsForWipe *int32                                         `json:"maximumFailedPasswordsForWipe"`
	PasswordExpirationTimeout     *string                                        `json:"passwordExpirationTimeout"`
	PasswordHistoryLength         *int32                                         `json:"passwordHistoryLength"`
	PasswordMinimumLength         *int32                                         `json:"passwordMinimumLength"`
	PasswordMinimumLetters        *int32                                         `json:"passwordMinimumLetters"`
	PasswordMinimumLowerCase      *int32                                         `json:"passwordMinimumLowerCase"`
	PasswordMinimumNonLetter      *int32                                         `json:"passwordMinimumNonLetter"`
	PasswordMinimumNumeric        *int32                                         `json:"passwordMinimumNumeric"`
	PasswordMinimumSymbols        *int32                                         `json:"passwordMinimumSymbols"`
	PasswordMinimumUpperCase      *int32                                         `json:"passwordMinimumUpperCase"`
	PasswordQuality               *PasswordRequirementsPasswordQualityEnum       `json:"passwordQuality"`
	PasswordScope                 *PasswordRequirementsPasswordScopeEnum         `json:"passwordScope"`
	RequirePasswordUnlock         *PasswordRequirementsRequirePasswordUnlockEnum `json:"requirePasswordUnlock"`
	UnifiedLockSettings           *PasswordRequirementsUnifiedLockSettingsEnum   `json:"unifiedLockSettings"`
}
