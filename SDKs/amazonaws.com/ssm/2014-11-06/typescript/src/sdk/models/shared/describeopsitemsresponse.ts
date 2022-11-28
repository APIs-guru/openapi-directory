import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemSummary } from "./opsitemsummary";



export class DescribeOpsItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OpsItemSummaries", elemType: OpsItemSummary })
  opsItemSummaries?: OpsItemSummary[];
}
