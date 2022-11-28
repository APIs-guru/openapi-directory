import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateWorkloadOutput
/** 
 * Output of a create workload call.
**/
export class CreateWorkloadOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkloadArn" })
  workloadArn?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
