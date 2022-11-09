import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SignalTypeEnum } from "./signaltypeenum";


export class SendAutomationSignalRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId: string;

  @Metadata({ data: "json, name=Payload" })
  payload?: Map<string, string[]>;

  @Metadata({ data: "json, name=SignalType" })
  signalType: SignalTypeEnum;
}
