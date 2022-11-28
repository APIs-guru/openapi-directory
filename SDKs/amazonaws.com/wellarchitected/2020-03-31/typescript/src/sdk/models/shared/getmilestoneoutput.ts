import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Milestone } from "./milestone";



// GetMilestoneOutput
/** 
 * Output of a get milestone call.
**/
export class GetMilestoneOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Milestone" })
  milestone?: Milestone;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
