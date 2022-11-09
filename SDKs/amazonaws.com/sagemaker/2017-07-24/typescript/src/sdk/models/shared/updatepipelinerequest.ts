import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePipelineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineDefinition" })
  pipelineDefinition?: string;

  @Metadata({ data: "json, name=PipelineDescription" })
  pipelineDescription?: string;

  @Metadata({ data: "json, name=PipelineDisplayName" })
  pipelineDisplayName?: string;

  @Metadata({ data: "json, name=PipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
