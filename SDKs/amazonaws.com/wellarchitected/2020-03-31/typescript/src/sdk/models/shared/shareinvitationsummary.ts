import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";



// ShareInvitationSummary
/** 
 * A share invitation summary return object.
**/
export class ShareInvitationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PermissionType" })
  permissionType?: PermissionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ShareInvitationId" })
  shareInvitationId?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedBy" })
  sharedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedWith" })
  sharedWith?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
