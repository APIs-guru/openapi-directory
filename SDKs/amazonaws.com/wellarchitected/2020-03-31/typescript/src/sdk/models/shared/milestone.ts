import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Workload } from "./workload";


// Milestone
/** 
 * A milestone return object.
**/
export class Milestone extends SpeakeasyBase {
  @Metadata({ data: "json, name=MilestoneName" })
  milestoneName?: string;

  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=RecordedAt" })
  recordedAt?: Date;

  @Metadata({ data: "json, name=Workload" })
  workload?: Workload;
}
