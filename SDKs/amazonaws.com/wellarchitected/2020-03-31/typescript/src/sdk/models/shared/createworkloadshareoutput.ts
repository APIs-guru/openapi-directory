import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateWorkloadShareOutput
/** 
 * Input for Create Workload Share
**/
export class CreateWorkloadShareOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShareId" })
  shareId?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
