import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopPipelineExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
