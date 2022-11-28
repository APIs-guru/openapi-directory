import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMaintenanceWindowTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId: string;

  @SpeakeasyMetadata({ data: "json, name=WindowTaskId" })
  windowTaskId: string;
}
