import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateWorkloadOutput
/** 
 * Output of a create workload call.
**/
export class CreateWorkloadOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkloadArn" })
  workloadArn?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
