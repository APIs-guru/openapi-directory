import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterTargetWithMaintenanceWindowResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
