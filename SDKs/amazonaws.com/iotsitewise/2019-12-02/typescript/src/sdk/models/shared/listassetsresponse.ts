import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetSummary } from "./assetsummary";


export class ListAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetSummaries", elemType: shared.AssetSummary })
  assetSummaries: AssetSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
