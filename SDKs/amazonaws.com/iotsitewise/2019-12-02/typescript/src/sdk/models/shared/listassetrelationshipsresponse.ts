import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetRelationshipSummary } from "./assetrelationshipsummary";



export class ListAssetRelationshipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetRelationshipSummaries", elemType: AssetRelationshipSummary })
  assetRelationshipSummaries: AssetRelationshipSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
