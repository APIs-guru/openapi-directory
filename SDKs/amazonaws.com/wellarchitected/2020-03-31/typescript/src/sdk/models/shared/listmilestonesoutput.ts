import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MilestoneSummary } from "./milestonesummary";


// ListMilestonesOutput
/** 
 * Output of a list milestones call.
**/
export class ListMilestonesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MilestoneSummaries", elemType: shared.MilestoneSummary })
  milestoneSummaries?: MilestoneSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
