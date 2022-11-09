import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceSharePermissionSummary } from "./resourcesharepermissionsummary";


export class ListPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=permissions", elemType: shared.ResourceSharePermissionSummary })
  permissions?: ResourceSharePermissionSummary[];
}
