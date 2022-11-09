import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetryPipelineExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
