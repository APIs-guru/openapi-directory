import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssetRelationshipSummary } from "./assetrelationshipsummary";
export declare class ListAssetRelationshipsResponse extends SpeakeasyBase {
    assetRelationshipSummaries: AssetRelationshipSummary[];
    nextToken?: string;
}
