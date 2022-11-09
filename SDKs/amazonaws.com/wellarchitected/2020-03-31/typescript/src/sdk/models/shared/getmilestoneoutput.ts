import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Milestone } from "./milestone";


// GetMilestoneOutput
/** 
 * Output of a get milestone call.
**/
export class GetMilestoneOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Milestone" })
  milestone?: Milestone;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
