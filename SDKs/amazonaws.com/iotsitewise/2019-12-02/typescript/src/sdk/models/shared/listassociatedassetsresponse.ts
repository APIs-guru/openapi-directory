import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociatedAssetsSummary } from "./associatedassetssummary";



export class ListAssociatedAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetSummaries", elemType: AssociatedAssetsSummary })
  assetSummaries: AssociatedAssetsSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
