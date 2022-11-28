import { SpeakeasyBase } from "../../../internal/utils";
import { StopTypeEnum } from "./stoptypeenum";
export declare class StopAutomationExecutionRequest extends SpeakeasyBase {
    automationExecutionId: string;
    type?: StopTypeEnum;
}
