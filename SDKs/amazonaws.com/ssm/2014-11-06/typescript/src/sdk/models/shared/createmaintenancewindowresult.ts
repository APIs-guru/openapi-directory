import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMaintenanceWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;
}
