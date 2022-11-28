import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterTaskFromMaintenanceWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowTaskId" })
  windowTaskId?: string;
}
