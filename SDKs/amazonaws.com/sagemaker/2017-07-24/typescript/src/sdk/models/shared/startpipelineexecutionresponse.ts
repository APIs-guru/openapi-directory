import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartPipelineExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
