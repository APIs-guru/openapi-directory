import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePipelineDefinitionForExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=PipelineDefinition" })
  pipelineDefinition?: string;
}
