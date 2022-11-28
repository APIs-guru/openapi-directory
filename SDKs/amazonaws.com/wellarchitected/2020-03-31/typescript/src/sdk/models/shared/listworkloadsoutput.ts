import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkloadSummary } from "./workloadsummary";



// ListWorkloadsOutput
/** 
 * Output of a list workloads call.
**/
export class ListWorkloadsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadSummaries", elemType: WorkloadSummary })
  workloadSummaries?: WorkloadSummary[];
}
