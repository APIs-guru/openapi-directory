import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1ViolationRemediation } from "./googlecloudassuredworkloadsv1violationremediation";
export declare enum GoogleCloudAssuredworkloadsV1ViolationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Resolved = "RESOLVED",
    Unresolved = "UNRESOLVED",
    Exception = "EXCEPTION"
}
/**
 * Workload monitoring Violation.
**/
export declare class GoogleCloudAssuredworkloadsV1Violation extends SpeakeasyBase {
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
    remediation?: GoogleCloudAssuredworkloadsV1ViolationRemediation;
    resolveTime?: string;
    state?: GoogleCloudAssuredworkloadsV1ViolationStateEnum;
    updateTime?: string;
}
