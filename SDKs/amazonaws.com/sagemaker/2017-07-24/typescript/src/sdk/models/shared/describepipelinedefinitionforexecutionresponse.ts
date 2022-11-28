import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePipelineDefinitionForExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=PipelineDefinition" })
  pipelineDefinition?: string;
}
