import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";
/**
 * A workload summary return object.
**/
export declare class WorkloadSummary extends SpeakeasyBase {
    improvementStatus?: WorkloadImprovementStatusEnum;
    lenses?: string[];
    owner?: string;
    riskCounts?: Map<string, number>;
    updatedAt?: Date;
    workloadArn?: string;
    workloadId?: string;
    workloadName?: string;
}
