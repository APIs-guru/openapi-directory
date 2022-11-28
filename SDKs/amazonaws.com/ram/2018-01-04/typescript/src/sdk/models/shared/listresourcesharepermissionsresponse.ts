import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceSharePermissionSummary } from "./resourcesharepermissionsummary";



export class ListResourceSharePermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: ResourceSharePermissionSummary })
  permissions?: ResourceSharePermissionSummary[];
}
