import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StopTypeEnum } from "./stoptypeenum";


export class StopAutomationExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId: string;

  @Metadata({ data: "json, name=Type" })
  type?: StopTypeEnum;
}
