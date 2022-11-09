import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareStatusEnum } from "./sharestatusenum";


// WorkloadShare
/** 
 * A workload share return object.
**/
export class WorkloadShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=PermissionType" })
  permissionType?: PermissionTypeEnum;

  @Metadata({ data: "json, name=ShareId" })
  shareId?: string;

  @Metadata({ data: "json, name=SharedBy" })
  sharedBy?: string;

  @Metadata({ data: "json, name=SharedWith" })
  sharedWith?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ShareStatusEnum;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;

  @Metadata({ data: "json, name=WorkloadName" })
  workloadName?: string;
}
