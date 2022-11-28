import { SpeakeasyBase } from "../../../internal/utils";
import { AssetModelSummary } from "./assetmodelsummary";
export declare class ListAssetModelsResponse extends SpeakeasyBase {
    assetModelSummaries: AssetModelSummary[];
    nextToken?: string;
}
