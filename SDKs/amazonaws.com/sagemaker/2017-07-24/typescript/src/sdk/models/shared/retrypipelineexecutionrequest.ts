import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetryPipelineExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;
}
