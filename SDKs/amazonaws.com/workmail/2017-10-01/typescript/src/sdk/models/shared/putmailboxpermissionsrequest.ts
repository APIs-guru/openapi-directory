import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";


export class PutMailboxPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityId" })
  entityId: string;

  @Metadata({ data: "json, name=GranteeId" })
  granteeId: string;

  @Metadata({ data: "json, name=OrganizationId" })
  organizationId: string;

  @Metadata({ data: "json, name=PermissionValues" })
  permissionValues: PermissionTypeEnum[];
}
