import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetryPipelineExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
