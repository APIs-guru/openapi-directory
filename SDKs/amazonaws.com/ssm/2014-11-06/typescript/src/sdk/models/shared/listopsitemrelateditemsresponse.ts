import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsItemRelatedItemSummary } from "./opsitemrelateditemsummary";


export class ListOpsItemRelatedItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Summaries", elemType: shared.OpsItemRelatedItemSummary })
  summaries?: OpsItemRelatedItemSummary[];
}
