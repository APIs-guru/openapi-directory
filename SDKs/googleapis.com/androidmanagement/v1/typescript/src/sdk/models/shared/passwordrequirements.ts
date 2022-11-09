import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PasswordRequirementsPasswordQualityEnum {
    PasswordQualityUnspecified = "PASSWORD_QUALITY_UNSPECIFIED"
,    BiometricWeak = "BIOMETRIC_WEAK"
,    Something = "SOMETHING"
,    Numeric = "NUMERIC"
,    NumericComplex = "NUMERIC_COMPLEX"
,    Alphabetic = "ALPHABETIC"
,    Alphanumeric = "ALPHANUMERIC"
,    Complex = "COMPLEX"
,    ComplexityLow = "COMPLEXITY_LOW"
,    ComplexityMedium = "COMPLEXITY_MEDIUM"
,    ComplexityHigh = "COMPLEXITY_HIGH"
}

export enum PasswordRequirementsPasswordScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED"
,    ScopeDevice = "SCOPE_DEVICE"
,    ScopeProfile = "SCOPE_PROFILE"
}

export enum PasswordRequirementsRequirePasswordUnlockEnum {
    RequirePasswordUnlockUnspecified = "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED"
,    UseDefaultDeviceTimeout = "USE_DEFAULT_DEVICE_TIMEOUT"
,    RequireEveryDay = "REQUIRE_EVERY_DAY"
}

export enum PasswordRequirementsUnifiedLockSettingsEnum {
    UnifiedLockSettingsUnspecified = "UNIFIED_LOCK_SETTINGS_UNSPECIFIED"
,    AllowUnifiedWorkAndPersonalLock = "ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK"
,    RequireSeparateWorkLock = "REQUIRE_SEPARATE_WORK_LOCK"
}


// PasswordRequirements
/** 
 * Requirements for the password used to unlock a device.
**/
export class PasswordRequirements extends SpeakeasyBase {
  @Metadata({ data: "json, name=maximumFailedPasswordsForWipe" })
  maximumFailedPasswordsForWipe?: number;

  @Metadata({ data: "json, name=passwordExpirationTimeout" })
  passwordExpirationTimeout?: string;

  @Metadata({ data: "json, name=passwordHistoryLength" })
  passwordHistoryLength?: number;

  @Metadata({ data: "json, name=passwordMinimumLength" })
  passwordMinimumLength?: number;

  @Metadata({ data: "json, name=passwordMinimumLetters" })
  passwordMinimumLetters?: number;

  @Metadata({ data: "json, name=passwordMinimumLowerCase" })
  passwordMinimumLowerCase?: number;

  @Metadata({ data: "json, name=passwordMinimumNonLetter" })
  passwordMinimumNonLetter?: number;

  @Metadata({ data: "json, name=passwordMinimumNumeric" })
  passwordMinimumNumeric?: number;

  @Metadata({ data: "json, name=passwordMinimumSymbols" })
  passwordMinimumSymbols?: number;

  @Metadata({ data: "json, name=passwordMinimumUpperCase" })
  passwordMinimumUpperCase?: number;

  @Metadata({ data: "json, name=passwordQuality" })
  passwordQuality?: PasswordRequirementsPasswordQualityEnum;

  @Metadata({ data: "json, name=passwordScope" })
  passwordScope?: PasswordRequirementsPasswordScopeEnum;

  @Metadata({ data: "json, name=requirePasswordUnlock" })
  requirePasswordUnlock?: PasswordRequirementsRequirePasswordUnlockEnum;

  @Metadata({ data: "json, name=unifiedLockSettings" })
  unifiedLockSettings?: PasswordRequirementsUnifiedLockSettingsEnum;
}
