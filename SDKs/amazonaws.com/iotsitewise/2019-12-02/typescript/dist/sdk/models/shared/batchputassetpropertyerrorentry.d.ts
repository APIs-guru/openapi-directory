import { SpeakeasyBase } from "../../../internal/utils";
import { BatchPutAssetPropertyError } from "./batchputassetpropertyerror";
/**
 * Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.
**/
export declare class BatchPutAssetPropertyErrorEntry extends SpeakeasyBase {
    entryId: string;
    errors: BatchPutAssetPropertyError[];
}
