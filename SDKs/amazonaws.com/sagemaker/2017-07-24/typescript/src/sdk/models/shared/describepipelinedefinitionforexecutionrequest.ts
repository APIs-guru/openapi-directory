import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePipelineDefinitionForExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;
}
