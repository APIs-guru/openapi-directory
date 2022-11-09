import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceSummaryItem } from "./compliancesummaryitem";


export class ListComplianceSummariesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceSummaryItems", elemType: shared.ComplianceSummaryItem })
  complianceSummaryItems?: ComplianceSummaryItem[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
