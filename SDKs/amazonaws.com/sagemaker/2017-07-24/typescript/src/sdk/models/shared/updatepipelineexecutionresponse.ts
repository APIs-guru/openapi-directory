import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePipelineExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
