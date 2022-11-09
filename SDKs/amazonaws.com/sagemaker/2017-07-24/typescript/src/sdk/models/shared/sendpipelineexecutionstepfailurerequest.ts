import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendPipelineExecutionStepFailureRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallbackToken" })
  callbackToken: string;

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;
}
