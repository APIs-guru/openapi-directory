import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAvailableManagementCidrRangesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ManagementCidrRangeConstraint" })
  managementCidrRangeConstraint: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
