import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareStatusEnum } from "./sharestatusenum";



// WorkloadShare
/** 
 * A workload share return object.
**/
export class WorkloadShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PermissionType" })
  permissionType?: PermissionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ShareId" })
  shareId?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedBy" })
  sharedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedWith" })
  sharedWith?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ShareStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
