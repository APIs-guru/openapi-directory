import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetryPipelineExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;
}
