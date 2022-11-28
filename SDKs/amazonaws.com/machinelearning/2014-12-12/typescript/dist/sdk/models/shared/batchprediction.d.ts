import { SpeakeasyBase } from "../../../internal/utils";
import { EntityStatusEnum } from "./entitystatusenum";
/**
 * <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p> <p> The content consists of the detailed metadata, the status, and the data file information of a <code>Batch Prediction</code>.</p>
**/
export declare class BatchPrediction extends SpeakeasyBase {
    batchPredictionDataSourceId?: string;
    batchPredictionId?: string;
    computeTime?: number;
    createdAt?: Date;
    createdByIamUser?: string;
    finishedAt?: Date;
    inputDataLocationS3?: string;
    invalidRecordCount?: number;
    lastUpdatedAt?: Date;
    mlModelId?: string;
    message?: string;
    name?: string;
    outputUri?: string;
    startedAt?: Date;
    status?: EntityStatusEnum;
    totalRecordCount?: number;
}
