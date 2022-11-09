import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelMaintenanceWindowExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId: string;
}
