import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartPipelineExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
