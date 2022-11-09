import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterTargetFromMaintenanceWindowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Safe" })
  safe?: boolean;

  @Metadata({ data: "json, name=WindowId" })
  windowId: string;

  @Metadata({ data: "json, name=WindowTargetId" })
  windowTargetId: string;
}
