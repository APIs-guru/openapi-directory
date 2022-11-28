import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAvailableManagementCidrRangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ManagementCidrRangeConstraint" })
  managementCidrRangeConstraint: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
