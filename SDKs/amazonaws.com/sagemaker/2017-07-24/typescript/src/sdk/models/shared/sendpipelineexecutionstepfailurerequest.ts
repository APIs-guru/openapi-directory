import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendPipelineExecutionStepFailureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallbackToken" })
  callbackToken: string;

  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;
}
