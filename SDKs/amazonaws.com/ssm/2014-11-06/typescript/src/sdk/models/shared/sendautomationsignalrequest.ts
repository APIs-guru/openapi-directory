import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SignalTypeEnum } from "./signaltypeenum";



export class SendAutomationSignalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId: string;

  @SpeakeasyMetadata({ data: "json, name=Payload" })
  payload?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=SignalType" })
  signalType: SignalTypeEnum;
}
