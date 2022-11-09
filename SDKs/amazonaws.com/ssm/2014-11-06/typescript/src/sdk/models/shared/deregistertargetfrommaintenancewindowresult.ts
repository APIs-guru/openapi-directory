import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterTargetFromMaintenanceWindowResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowId" })
  windowId?: string;

  @Metadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
