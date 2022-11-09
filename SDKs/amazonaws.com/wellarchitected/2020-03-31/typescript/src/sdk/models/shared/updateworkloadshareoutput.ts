import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadShare } from "./workloadshare";


// UpdateWorkloadShareOutput
/** 
 * Input for Update Workload Share
**/
export class UpdateWorkloadShareOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @Metadata({ data: "json, name=WorkloadShare" })
  workloadShare?: WorkloadShare;
}
