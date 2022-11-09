import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMaintenanceWindowResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;
}
