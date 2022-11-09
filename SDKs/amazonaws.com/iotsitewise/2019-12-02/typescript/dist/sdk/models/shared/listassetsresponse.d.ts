import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetSummary } from "./assetsummary";
export declare class ListAssetsResponse extends SpeakeasyBase {
    assetSummaries: AssetSummary[];
    nextToken?: string;
}
