import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PasswordRequirementsPasswordQualityEnum {
    PasswordQualityUnspecified = "PASSWORD_QUALITY_UNSPECIFIED",
    BiometricWeak = "BIOMETRIC_WEAK",
    Something = "SOMETHING",
    Numeric = "NUMERIC",
    NumericComplex = "NUMERIC_COMPLEX",
    Alphabetic = "ALPHABETIC",
    Alphanumeric = "ALPHANUMERIC",
    Complex = "COMPLEX",
    ComplexityLow = "COMPLEXITY_LOW",
    ComplexityMedium = "COMPLEXITY_MEDIUM",
    ComplexityHigh = "COMPLEXITY_HIGH"
}
export declare enum PasswordRequirementsPasswordScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeDevice = "SCOPE_DEVICE",
    ScopeProfile = "SCOPE_PROFILE"
}
export declare enum PasswordRequirementsRequirePasswordUnlockEnum {
    RequirePasswordUnlockUnspecified = "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
    UseDefaultDeviceTimeout = "USE_DEFAULT_DEVICE_TIMEOUT",
    RequireEveryDay = "REQUIRE_EVERY_DAY"
}
export declare enum PasswordRequirementsUnifiedLockSettingsEnum {
    UnifiedLockSettingsUnspecified = "UNIFIED_LOCK_SETTINGS_UNSPECIFIED",
    AllowUnifiedWorkAndPersonalLock = "ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK",
    RequireSeparateWorkLock = "REQUIRE_SEPARATE_WORK_LOCK"
}
/**
 * Requirements for the password used to unlock a device.
**/
export declare class PasswordRequirements extends SpeakeasyBase {
    maximumFailedPasswordsForWipe?: number;
    passwordExpirationTimeout?: string;
    passwordHistoryLength?: number;
    passwordMinimumLength?: number;
    passwordMinimumLetters?: number;
    passwordMinimumLowerCase?: number;
    passwordMinimumNonLetter?: number;
    passwordMinimumNumeric?: number;
    passwordMinimumSymbols?: number;
    passwordMinimumUpperCase?: number;
    passwordQuality?: PasswordRequirementsPasswordQualityEnum;
    passwordScope?: PasswordRequirementsPasswordScopeEnum;
    requirePasswordUnlock?: PasswordRequirementsRequirePasswordUnlockEnum;
    unifiedLockSettings?: PasswordRequirementsUnifiedLockSettingsEnum;
}
