import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CommonCriteriaModeInfoCommonCriteriaModeStatusEnum {
    CommonCriteriaModeStatusUnknown = "COMMON_CRITERIA_MODE_STATUS_UNKNOWN",
    CommonCriteriaModeDisabled = "COMMON_CRITERIA_MODE_DISABLED",
    CommonCriteriaModeEnabled = "COMMON_CRITERIA_MODE_ENABLED"
}
/**
 * Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.
**/
export declare class CommonCriteriaModeInfo extends SpeakeasyBase {
    commonCriteriaModeStatus?: CommonCriteriaModeInfoCommonCriteriaModeStatusEnum;
}
