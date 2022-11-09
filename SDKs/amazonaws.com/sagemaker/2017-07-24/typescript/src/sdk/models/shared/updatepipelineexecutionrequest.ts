import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePipelineExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;

  @Metadata({ data: "json, name=PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @Metadata({ data: "json, name=PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;
}
