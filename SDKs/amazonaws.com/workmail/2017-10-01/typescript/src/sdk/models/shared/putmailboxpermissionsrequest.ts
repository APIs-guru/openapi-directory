import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";



export class PutMailboxPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "json, name=GranteeId" })
  granteeId: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionValues" })
  permissionValues: PermissionTypeEnum[];
}
