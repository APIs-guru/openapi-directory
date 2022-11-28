import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelMaintenanceWindowExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId: string;
}
