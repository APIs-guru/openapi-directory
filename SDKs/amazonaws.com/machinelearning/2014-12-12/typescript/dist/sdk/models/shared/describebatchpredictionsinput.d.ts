import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPredictionFilterVariableEnum } from "./batchpredictionfiltervariableenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class DescribeBatchPredictionsInput extends SpeakeasyBase {
    eq?: string;
    filterVariable?: BatchPredictionFilterVariableEnum;
    ge?: string;
    gt?: string;
    le?: string;
    lt?: string;
    limit?: number;
    ne?: string;
    nextToken?: string;
    prefix?: string;
    sortOrder?: SortOrderEnum;
}
