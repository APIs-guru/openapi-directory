import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMaintenanceWindowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId: string;
}
