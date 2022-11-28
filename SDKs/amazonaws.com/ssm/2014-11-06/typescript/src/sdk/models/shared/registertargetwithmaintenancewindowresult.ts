import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterTargetWithMaintenanceWindowResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowTargetId" })
  windowTargetId?: string;
}
