import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkloadShare } from "./workloadshare";



// UpdateWorkloadShareOutput
/** 
 * Input for Update Workload Share
**/
export class UpdateWorkloadShareOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadShare" })
  workloadShare?: WorkloadShare;
}
