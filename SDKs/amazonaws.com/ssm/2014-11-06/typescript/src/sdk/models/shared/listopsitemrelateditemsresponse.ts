import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemRelatedItemSummary } from "./opsitemrelateditemsummary";



export class ListOpsItemRelatedItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Summaries", elemType: OpsItemRelatedItemSummary })
  summaries?: OpsItemRelatedItemSummary[];
}
