import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateWorkloadShareOutput
/** 
 * Input for Create Workload Share
**/
export class CreateWorkloadShareOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShareId" })
  shareId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
