import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedAssetsSummary } from "./associatedassetssummary";
export declare class ListAssociatedAssetsResponse extends SpeakeasyBase {
    assetSummaries: AssociatedAssetsSummary[];
    nextToken?: string;
}
