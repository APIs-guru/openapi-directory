import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineDefinition" })
  pipelineDefinition?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineDescription" })
  pipelineDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineDisplayName" })
  pipelineDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
