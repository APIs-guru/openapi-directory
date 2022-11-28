import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";



export class ListMailboxPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions", elemType: Permission })
  permissions?: Permission[];
}
