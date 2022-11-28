import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";
/**
 * Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation.
**/
export declare class PutAssetPropertyValueEntry extends SpeakeasyBase {
    assetId?: string;
    entryId: string;
    propertyAlias?: string;
    propertyId?: string;
    propertyValues: AssetPropertyValue[];
}
