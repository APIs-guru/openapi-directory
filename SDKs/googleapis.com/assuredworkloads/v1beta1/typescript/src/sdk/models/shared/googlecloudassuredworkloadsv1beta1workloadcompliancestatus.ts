import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus
/** 
 * Represents the Compliance Status of this workload
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgedViolationCount" })
  acknowledgedViolationCount?: number;

  @Metadata({ data: "json, name=activeViolationCount" })
  activeViolationCount?: number;
}
