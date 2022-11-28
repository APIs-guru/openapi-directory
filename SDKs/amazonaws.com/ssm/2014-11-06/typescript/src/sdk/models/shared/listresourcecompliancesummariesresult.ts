import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceComplianceSummaryItem } from "./resourcecompliancesummaryitem";



export class ListResourceComplianceSummariesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceComplianceSummaryItems", elemType: ResourceComplianceSummaryItem })
  resourceComplianceSummaryItems?: ResourceComplianceSummaryItem[];
}
