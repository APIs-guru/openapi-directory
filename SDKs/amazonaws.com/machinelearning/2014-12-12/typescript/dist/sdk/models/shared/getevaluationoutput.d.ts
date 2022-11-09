import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PerformanceMetrics } from "./performancemetrics";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.
**/
export declare class GetEvaluationOutput extends SpeakeasyBase {
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    evaluationDataSourceId?: string;
    evaluationId?: string;
    finishedAt?: Date;
    inputDataLocationS3?: string;
    lastUpdatedAt?: Date;
    logUri?: string;
    mlModelId?: string;
    message?: string;
    name?: string;
    performanceMetrics?: PerformanceMetrics;
    startedAt?: Date;
    status?: EntityStatusEnum;
}
