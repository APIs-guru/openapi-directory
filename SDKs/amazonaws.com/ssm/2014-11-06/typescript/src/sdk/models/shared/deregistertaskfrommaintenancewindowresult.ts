import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterTaskFromMaintenanceWindowResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;

  @Metadata({ data: "json, name=WindowTaskId" })
  windowTaskId?: string;
}
