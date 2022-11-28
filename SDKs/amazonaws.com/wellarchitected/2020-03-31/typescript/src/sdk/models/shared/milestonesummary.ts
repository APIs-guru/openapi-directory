import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkloadSummary } from "./workloadsummary";



// MilestoneSummary
/** 
 * A milestone summary return object.
**/
export class MilestoneSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MilestoneName" })
  milestoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=RecordedAt" })
  recordedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=WorkloadSummary" })
  workloadSummary?: WorkloadSummary;
}
