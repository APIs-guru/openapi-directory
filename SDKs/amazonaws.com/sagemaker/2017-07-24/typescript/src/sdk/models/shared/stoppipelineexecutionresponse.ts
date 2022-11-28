import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPipelineExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
