import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociatedAssetsSummary } from "./associatedassetssummary";


export class ListAssociatedAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetSummaries", elemType: shared.AssociatedAssetsSummary })
  assetSummaries: AssociatedAssetsSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
