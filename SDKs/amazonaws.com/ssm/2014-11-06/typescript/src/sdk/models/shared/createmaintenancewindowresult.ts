import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMaintenanceWindowResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;
}
