import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPermissionSetsProvisionedToAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSets" })
  permissionSets?: string[];
}
