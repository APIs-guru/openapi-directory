import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadSummary } from "./workloadsummary";
/**
 * Output of a list workloads call.
**/
export declare class ListWorkloadsOutput extends SpeakeasyBase {
    nextToken?: string;
    workloadSummaries?: WorkloadSummary[];
}
