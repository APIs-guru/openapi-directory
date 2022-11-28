import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareStatusEnum } from "./sharestatusenum";



// WorkloadShareSummary
/** 
 * A workload share summary return object.
**/
export class WorkloadShareSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PermissionType" })
  permissionType?: PermissionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ShareId" })
  shareId?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedWith" })
  sharedWith?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ShareStatusEnum;
}
