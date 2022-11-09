import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateMilestoneOutput
/** 
 * Output of a create milestone call.
**/
export class CreateMilestoneOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
