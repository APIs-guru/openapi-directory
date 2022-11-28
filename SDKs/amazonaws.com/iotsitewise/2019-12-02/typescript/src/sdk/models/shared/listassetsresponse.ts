import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetSummary } from "./assetsummary";



export class ListAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetSummaries", elemType: AssetSummary })
  assetSummaries: AssetSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
