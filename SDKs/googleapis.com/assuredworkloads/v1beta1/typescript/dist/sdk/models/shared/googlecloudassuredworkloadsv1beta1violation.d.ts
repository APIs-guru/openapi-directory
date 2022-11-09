import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1beta1ViolationRemediation } from "./googlecloudassuredworkloadsv1beta1violationremediation";
export declare enum GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Resolved = "RESOLVED",
    Unresolved = "UNRESOLVED",
    Exception = "EXCEPTION"
}
/**
 * Workload monitoring Violation.
**/
export declare class GoogleCloudAssuredworkloadsV1beta1Violation extends SpeakeasyBase {
    acknowledged?: boolean;
    acknowledgementTime?: string;
    auditLogLink?: string;
    beginTime?: string;
    category?: string;
    description?: string;
    exceptionAuditLogLink?: string;
    name?: string;
    nonCompliantOrgPolicy?: string;
    orgPolicyConstraint?: string;
    remediation?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediation;
    resolveTime?: string;
    state?: GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum;
    updateTime?: string;
}
