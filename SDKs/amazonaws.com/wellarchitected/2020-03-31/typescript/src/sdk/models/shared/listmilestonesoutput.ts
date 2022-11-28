import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MilestoneSummary } from "./milestonesummary";



// ListMilestonesOutput
/** 
 * Output of a list milestones call.
**/
export class ListMilestonesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MilestoneSummaries", elemType: MilestoneSummary })
  milestoneSummaries?: MilestoneSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
