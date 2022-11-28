import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PasswordRequirementsPasswordQualityEnum {
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

export enum PasswordRequirementsPasswordScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeDevice = "SCOPE_DEVICE",
    ScopeProfile = "SCOPE_PROFILE"
}

export enum PasswordRequirementsRequirePasswordUnlockEnum {
    RequirePasswordUnlockUnspecified = "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
    UseDefaultDeviceTimeout = "USE_DEFAULT_DEVICE_TIMEOUT",
    RequireEveryDay = "REQUIRE_EVERY_DAY"
}

export enum PasswordRequirementsUnifiedLockSettingsEnum {
    UnifiedLockSettingsUnspecified = "UNIFIED_LOCK_SETTINGS_UNSPECIFIED",
    AllowUnifiedWorkAndPersonalLock = "ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK",
    RequireSeparateWorkLock = "REQUIRE_SEPARATE_WORK_LOCK"
}


// PasswordRequirements
/** 
 * Requirements for the password used to unlock a device.
**/
export class PasswordRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maximumFailedPasswordsForWipe" })
  maximumFailedPasswordsForWipe?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordExpirationTimeout" })
  passwordExpirationTimeout?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordHistoryLength" })
  passwordHistoryLength?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordMinimumLength" })
  passwordMinimumLength?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordMinimumLetters" })
  passwordMinimumLetters?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordMinimumLowerCase" })
  passwordMinimumLowerCase?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordMinimumNonLetter" })
  passwordMinimumNonLetter?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordMinimumNumeric" })
  passwordMinimumNumeric?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordMinimumSymbols" })
  passwordMinimumSymbols?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordMinimumUpperCase" })
  passwordMinimumUpperCase?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordQuality" })
  passwordQuality?: PasswordRequirementsPasswordQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=passwordScope" })
  passwordScope?: PasswordRequirementsPasswordScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=requirePasswordUnlock" })
  requirePasswordUnlock?: PasswordRequirementsRequirePasswordUnlockEnum;

  @SpeakeasyMetadata({ data: "json, name=unifiedLockSettings" })
  unifiedLockSettings?: PasswordRequirementsUnifiedLockSettingsEnum;
}
