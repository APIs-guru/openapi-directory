import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.
**/
export declare class GetBatchPredictionOutput extends SpeakeasyBase {
    batchPredictionDataSourceId?: string;
    batchPredictionId?: string;
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    finishedAt?: Date;
    inputDataLocationS3?: string;
    invalidRecordCount?: number;
    lastUpdatedAt?: Date;
    logUri?: string;
    mlModelId?: string;
    message?: string;
    name?: string;
    outputUri?: string;
    startedAt?: Date;
    status?: EntityStatusEnum;
    totalRecordCount?: number;
}
