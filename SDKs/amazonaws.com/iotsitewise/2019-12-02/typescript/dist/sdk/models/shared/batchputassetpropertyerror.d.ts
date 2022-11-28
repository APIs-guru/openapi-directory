import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPutAssetPropertyValueErrorCodeEnum } from "./batchputassetpropertyvalueerrorcodeenum";
import { TimeInNanos } from "./timeinnanos";
/**
 * Contains error information from updating a batch of asset property values.
**/
export declare class BatchPutAssetPropertyError extends SpeakeasyBase {
    errorCode: BatchPutAssetPropertyValueErrorCodeEnum;
    errorMessage: string;
    timestamps: TimeInNanos[];
}
