import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workload } from "./workload";



// Milestone
/** 
 * A milestone return object.
**/
export class Milestone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MilestoneName" })
  milestoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=RecordedAt" })
  recordedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Workload" })
  workload?: Workload;
}
