import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowResourceTypeEnum } from "./maintenancewindowresourcetypeenum";
import { Target } from "./target";



export class RegisterTargetWithMaintenanceWindowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerInformation" })
  ownerInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: MaintenanceWindowResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets: Target[];

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId: string;
}
