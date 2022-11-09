import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";


// MaintenanceWindowTarget
/** 
 * The target registered with the maintenance window.
**/
export class MaintenanceWindowTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwnerInformation" })
  ownerInformation?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: MaintenanceWindowResourceTypeEnum;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;

  @Metadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
