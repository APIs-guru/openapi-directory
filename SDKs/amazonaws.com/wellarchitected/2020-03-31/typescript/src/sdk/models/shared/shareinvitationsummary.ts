import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";


// ShareInvitationSummary
/** 
 * A share invitation summary return object.
**/
export class ShareInvitationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=PermissionType" })
  permissionType?: PermissionTypeEnum;

  @Metadata({ data: "json, name=ShareInvitationId" })
  shareInvitationId?: string;

  @Metadata({ data: "json, name=SharedBy" })
  sharedBy?: string;

  @Metadata({ data: "json, name=SharedWith" })
  sharedWith?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @Metadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
