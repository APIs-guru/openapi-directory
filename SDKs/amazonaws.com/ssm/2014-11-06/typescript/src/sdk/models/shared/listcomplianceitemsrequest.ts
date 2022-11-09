import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceStringFilter } from "./compliancestringfilter";


export class ListComplianceItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.ComplianceStringFilter })
  filters?: ComplianceStringFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceIds" })
  resourceIds?: string[];

  @Metadata({ data: "json, name=ResourceTypes" })
  resourceTypes?: string[];
}
