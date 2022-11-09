import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OutputParameter } from "./outputparameter";


export class SendPipelineExecutionStepSuccessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallbackToken" })
  callbackToken: string;

  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=OutputParameters", elemType: shared.OutputParameter })
  outputParameters?: OutputParameter[];
}
