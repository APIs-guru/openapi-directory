import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummaryItem } from "./compliancesummaryitem";



export class ListComplianceSummariesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceSummaryItems", elemType: ComplianceSummaryItem })
  complianceSummaryItems?: ComplianceSummaryItem[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
