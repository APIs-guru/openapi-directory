import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1beta1ViolationRemediation } from "./googlecloudassuredworkloadsv1beta1violationremediation";

export enum GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Resolved = "RESOLVED"
,    Unresolved = "UNRESOLVED"
,    Exception = "EXCEPTION"
}


// GoogleCloudAssuredworkloadsV1beta1Violation
/** 
 * Workload monitoring Violation.
**/
export class GoogleCloudAssuredworkloadsV1beta1Violation extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledged" })
  acknowledged?: boolean;

  @Metadata({ data: "json, name=acknowledgementTime" })
  acknowledgementTime?: string;

  @Metadata({ data: "json, name=auditLogLink" })
  auditLogLink?: string;

  @Metadata({ data: "json, name=beginTime" })
  beginTime?: string;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=exceptionAuditLogLink" })
  exceptionAuditLogLink?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nonCompliantOrgPolicy" })
  nonCompliantOrgPolicy?: string;

  @Metadata({ data: "json, name=orgPolicyConstraint" })
  orgPolicyConstraint?: string;

  @Metadata({ data: "json, name=remediation" })
  remediation?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediation;

  @Metadata({ data: "json, name=resolveTime" })
  resolveTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
