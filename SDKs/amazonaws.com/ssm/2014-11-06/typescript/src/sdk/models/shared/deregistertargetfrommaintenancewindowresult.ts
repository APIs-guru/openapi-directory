import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterTargetFromMaintenanceWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
