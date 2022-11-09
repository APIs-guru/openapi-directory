import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePipelineExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
