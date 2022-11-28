import { SpeakeasyBase } from "../../../internal/utils";
import { OutputParameter } from "./outputparameter";
export declare class SendPipelineExecutionStepSuccessRequest extends SpeakeasyBase {
    callbackToken: string;
    clientRequestToken?: string;
    outputParameters?: OutputParameter[];
}
