import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMaintenanceWindowExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId: string;
}
