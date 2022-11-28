import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateBatchPredictionInput extends SpeakeasyBase {
    batchPredictionDataSourceId: string;
    batchPredictionId: string;
    batchPredictionName?: string;
    mlModelId: string;
    outputUri: string;
}
