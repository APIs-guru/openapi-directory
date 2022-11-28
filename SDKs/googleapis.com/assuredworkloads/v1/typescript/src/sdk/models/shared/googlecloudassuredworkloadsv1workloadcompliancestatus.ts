import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus
/** 
 * Represents the Compliance Status of this workload
**/
export class GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgedViolationCount" })
  acknowledgedViolationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=activeViolationCount" })
  activeViolationCount?: number;
}
