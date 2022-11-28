import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1ViolationRemediation } from "./googlecloudassuredworkloadsv1violationremediation";


export enum GoogleCloudAssuredworkloadsV1ViolationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Resolved = "RESOLVED",
    Unresolved = "UNRESOLVED",
    Exception = "EXCEPTION"
}


// GoogleCloudAssuredworkloadsV1Violation
/** 
 * Workload monitoring Violation.
**/
export class GoogleCloudAssuredworkloadsV1Violation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledged" })
  acknowledged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=acknowledgementTime" })
  acknowledgementTime?: string;

  @SpeakeasyMetadata({ data: "json, name=auditLogLink" })
  auditLogLink?: string;

  @SpeakeasyMetadata({ data: "json, name=beginTime" })
  beginTime?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=exceptionAuditLogLink" })
  exceptionAuditLogLink?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nonCompliantOrgPolicy" })
  nonCompliantOrgPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=orgPolicyConstraint" })
  orgPolicyConstraint?: string;

  @SpeakeasyMetadata({ data: "json, name=remediation" })
  remediation?: GoogleCloudAssuredworkloadsV1ViolationRemediation;

  @SpeakeasyMetadata({ data: "json, name=resolveTime" })
  resolveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudAssuredworkloadsV1ViolationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
