import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateMilestoneOutput
/** 
 * Output of a create milestone call.
**/
export class CreateMilestoneOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
