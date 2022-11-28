import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NonComplianceDetailConditionNonComplianceReasonEnum {
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
/**
 * A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.
**/
export declare class NonComplianceDetailCondition extends SpeakeasyBase {
    nonComplianceReason?: NonComplianceDetailConditionNonComplianceReasonEnum;
    packageName?: string;
    settingName?: string;
}
