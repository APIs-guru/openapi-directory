import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkloadShareSummary } from "./workloadsharesummary";



// ListWorkloadSharesOutput
/** 
 * Input for List Workload Share
**/
export class ListWorkloadSharesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadShareSummaries", elemType: WorkloadShareSummary })
  workloadShareSummaries?: WorkloadShareSummary[];
}
