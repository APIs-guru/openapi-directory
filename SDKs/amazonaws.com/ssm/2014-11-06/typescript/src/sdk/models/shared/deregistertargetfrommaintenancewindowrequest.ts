import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterTargetFromMaintenanceWindowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Safe" })
  safe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId: string;

  @SpeakeasyMetadata({ data: "json, name=WindowTargetId" })
  windowTargetId: string;
}
