import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareStatusEnum } from "./sharestatusenum";


// WorkloadShareSummary
/** 
 * A workload share summary return object.
**/
export class WorkloadShareSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=PermissionType" })
  permissionType?: PermissionTypeEnum;

  @Metadata({ data: "json, name=ShareId" })
  shareId?: string;

  @Metadata({ data: "json, name=SharedWith" })
  sharedWith?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ShareStatusEnum;
}
