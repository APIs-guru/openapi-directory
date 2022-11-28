import { SpeakeasyBase } from "../../../internal/utils";
import { SpecificNonComplianceContext } from "./specificnoncompliancecontext";
export declare enum NonComplianceDetailInstallationFailureReasonEnum {
    InstallationFailureReasonUnspecified = "INSTALLATION_FAILURE_REASON_UNSPECIFIED",
    InstallationFailureReasonUnknown = "INSTALLATION_FAILURE_REASON_UNKNOWN",
    InProgress = "IN_PROGRESS",
    NotFound = "NOT_FOUND",
    NotCompatibleWithDevice = "NOT_COMPATIBLE_WITH_DEVICE",
    NotApproved = "NOT_APPROVED",
    PermissionsNotAccepted = "PERMISSIONS_NOT_ACCEPTED",
    NotAvailableInCountry = "NOT_AVAILABLE_IN_COUNTRY",
    NoLicensesRemaining = "NO_LICENSES_REMAINING",
    NotEnrolled = "NOT_ENROLLED",
    UserInvalid = "USER_INVALID"
}
export declare enum NonComplianceDetailNonComplianceReasonEnum {
    NonComplianceReasonUnspecified = "NON_COMPLIANCE_REASON_UNSPECIFIED",
    ApiLevel = "API_LEVEL",
    ManagementMode = "MANAGEMENT_MODE",
    UserAction = "USER_ACTION",
    InvalidValue = "INVALID_VALUE",
    AppNotInstalled = "APP_NOT_INSTALLED",
    Unsupported = "UNSUPPORTED",
    AppInstalled = "APP_INSTALLED",
    Pending = "PENDING",
    AppIncompatible = "APP_INCOMPATIBLE",
    AppNotUpdated = "APP_NOT_UPDATED"
}
export declare enum NonComplianceDetailSpecificNonComplianceReasonEnum {
    SpecificNonComplianceReasonUnspecified = "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED",
    PasswordPoliciesUserCredentialsConfirmationRequired = "PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED",
    PasswordPoliciesPasswordExpired = "PASSWORD_POLICIES_PASSWORD_EXPIRED",
    PasswordPoliciesPasswordNotSufficient = "PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT",
    OncWifiInvalidValue = "ONC_WIFI_INVALID_VALUE",
    OncWifiApiLevel = "ONC_WIFI_API_LEVEL"
}
/**
 * Provides detail about non-compliance with a policy setting.
**/
export declare class NonComplianceDetail extends SpeakeasyBase {
    currentValue?: any;
    fieldPath?: string;
    installationFailureReason?: NonComplianceDetailInstallationFailureReasonEnum;
    nonComplianceReason?: NonComplianceDetailNonComplianceReasonEnum;
    packageName?: string;
    settingName?: string;
    specificNonComplianceContext?: SpecificNonComplianceContext;
    specificNonComplianceReason?: NonComplianceDetailSpecificNonComplianceReasonEnum;
}
