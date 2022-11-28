import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceMetrics } from "./performancemetrics";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * <p> Represents the output of <code>GetEvaluation</code> operation. </p> <p>The content consists of the detailed metadata and data file information and the current status of the <code>Evaluation</code>.</p>
**/
export declare class Evaluation extends SpeakeasyBase {
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    evaluationDataSourceId?: string;
    evaluationId?: string;
    finishedAt?: Date;
    inputDataLocationS3?: string;
    lastUpdatedAt?: Date;
    mlModelId?: string;
    message?: string;
    name?: string;
    performanceMetrics?: PerformanceMetrics;
    startedAt?: Date;
    status?: EntityStatusEnum;
}
