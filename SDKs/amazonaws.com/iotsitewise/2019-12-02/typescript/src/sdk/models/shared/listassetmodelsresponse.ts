import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetModelSummary } from "./assetmodelsummary";



export class ListAssetModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetModelSummaries", elemType: AssetModelSummary })
  assetModelSummaries: AssetModelSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
