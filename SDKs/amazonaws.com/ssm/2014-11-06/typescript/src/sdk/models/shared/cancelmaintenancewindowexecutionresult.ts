import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelMaintenanceWindowExecutionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId?: string;
}
