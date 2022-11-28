import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStringFilter } from "./compliancestringfilter";



export class ListResourceComplianceSummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: ComplianceStringFilter })
  filters?: ComplianceStringFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
