import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPermissionSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PermissionSets" })
  permissionSets?: string[];
}
