import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputParameter } from "./outputparameter";



export class SendPipelineExecutionStepSuccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallbackToken" })
  callbackToken: string;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputParameters", elemType: OutputParameter })
  outputParameters?: OutputParameter[];
}
