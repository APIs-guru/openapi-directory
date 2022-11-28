import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMaintenanceWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId?: string;
}
