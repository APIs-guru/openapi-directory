import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStringFilter } from "./compliancestringfilter";



export class ListComplianceItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: ComplianceStringFilter })
  filters?: ComplianceStringFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceIds" })
  resourceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ResourceTypes" })
  resourceTypes?: string[];
}
