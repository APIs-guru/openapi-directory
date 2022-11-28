import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";



export class UpdateMaintenanceWindowTargetResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerInformation" })
  ownerInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
