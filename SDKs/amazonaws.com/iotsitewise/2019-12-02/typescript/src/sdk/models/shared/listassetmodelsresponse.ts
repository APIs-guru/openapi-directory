import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetModelSummary } from "./assetmodelsummary";


export class ListAssetModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetModelSummaries", elemType: shared.AssetModelSummary })
  assetModelSummaries: AssetModelSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
