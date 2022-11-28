import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StopTypeEnum } from "./stoptypeenum";



export class StopAutomationExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: StopTypeEnum;
}
