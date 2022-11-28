import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceSharePermissionSummary } from "./resourcesharepermissionsummary";



export class ListPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: ResourceSharePermissionSummary })
  permissions?: ResourceSharePermissionSummary[];
}
