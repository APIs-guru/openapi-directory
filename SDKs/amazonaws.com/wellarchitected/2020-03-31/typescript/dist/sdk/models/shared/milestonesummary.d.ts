import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadSummary } from "./workloadsummary";
/**
 * A milestone summary return object.
**/
export declare class MilestoneSummary extends SpeakeasyBase {
    milestoneName?: string;
    milestoneNumber?: number;
    recordedAt?: Date;
    workloadSummary?: WorkloadSummary;
}
