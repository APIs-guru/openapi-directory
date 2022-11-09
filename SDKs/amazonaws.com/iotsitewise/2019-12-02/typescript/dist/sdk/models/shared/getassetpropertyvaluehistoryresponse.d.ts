import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";
export declare class GetAssetPropertyValueHistoryResponse extends SpeakeasyBase {
    assetPropertyValueHistory: AssetPropertyValue[];
    nextToken?: string;
}
