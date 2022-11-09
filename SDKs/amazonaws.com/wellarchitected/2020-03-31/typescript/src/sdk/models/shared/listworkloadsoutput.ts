import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkloadSummary } from "./workloadsummary";


// ListWorkloadsOutput
/** 
 * Output of a list workloads call.
**/
export class ListWorkloadsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkloadSummaries", elemType: shared.WorkloadSummary })
  workloadSummaries?: WorkloadSummary[];
}
