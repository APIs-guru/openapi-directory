import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadSummary } from "./workloadsummary";


// MilestoneSummary
/** 
 * A milestone summary return object.
**/
export class MilestoneSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=MilestoneName" })
  milestoneName?: string;

  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=RecordedAt" })
  recordedAt?: Date;

  @Metadata({ data: "json, name=WorkloadSummary" })
  workloadSummary?: WorkloadSummary;
}
