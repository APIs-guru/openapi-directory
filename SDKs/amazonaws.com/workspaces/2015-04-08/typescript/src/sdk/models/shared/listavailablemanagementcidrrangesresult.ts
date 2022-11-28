import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAvailableManagementCidrRangesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ManagementCidrRanges" })
  managementCidrRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
