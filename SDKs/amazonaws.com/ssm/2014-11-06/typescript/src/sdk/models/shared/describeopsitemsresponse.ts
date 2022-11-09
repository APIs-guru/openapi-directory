import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsItemSummary } from "./opsitemsummary";


export class DescribeOpsItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=OpsItemSummaries", elemType: shared.OpsItemSummary })
  opsItemSummaries?: OpsItemSummary[];
}
