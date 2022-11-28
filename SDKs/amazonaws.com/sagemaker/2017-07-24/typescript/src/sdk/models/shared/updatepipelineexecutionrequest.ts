import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePipelineExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;
}
