import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkloadShareSummary } from "./workloadsharesummary";


// ListWorkloadSharesOutput
/** 
 * Input for List Workload Share
**/
export class ListWorkloadSharesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @Metadata({ data: "json, name=WorkloadShareSummaries", elemType: shared.WorkloadShareSummary })
  workloadShareSummaries?: WorkloadShareSummary[];
}
