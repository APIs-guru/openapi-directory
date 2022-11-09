import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAvailableManagementCidrRangesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ManagementCidrRanges" })
  managementCidrRanges?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
