import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetRelationshipSummary } from "./assetrelationshipsummary";


export class ListAssetRelationshipsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetRelationshipSummaries", elemType: shared.AssetRelationshipSummary })
  assetRelationshipSummaries: AssetRelationshipSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
