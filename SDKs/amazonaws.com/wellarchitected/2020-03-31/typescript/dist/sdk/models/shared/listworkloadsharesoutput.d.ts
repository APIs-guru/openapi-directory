import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadShareSummary } from "./workloadsharesummary";
/**
 * Input for List Workload Share
**/
export declare class ListWorkloadSharesOutput extends SpeakeasyBase {
    nextToken?: string;
    workloadId?: string;
    workloadShareSummaries?: WorkloadShareSummary[];
}
