import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMaintenanceWindowExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId: string;
}
