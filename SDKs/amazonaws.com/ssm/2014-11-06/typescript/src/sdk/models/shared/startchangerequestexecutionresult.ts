import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartChangeRequestExecutionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId?: string;
}
