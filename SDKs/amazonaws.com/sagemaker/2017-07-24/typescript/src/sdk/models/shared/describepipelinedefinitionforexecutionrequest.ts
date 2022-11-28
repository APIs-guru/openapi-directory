import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePipelineDefinitionForExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;
}
