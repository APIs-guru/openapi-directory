import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMaintenanceWindowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId: string;
}
