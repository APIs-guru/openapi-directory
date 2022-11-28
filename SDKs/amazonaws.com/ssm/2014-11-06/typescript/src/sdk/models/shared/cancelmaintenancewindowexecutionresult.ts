import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelMaintenanceWindowExecutionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;
}
