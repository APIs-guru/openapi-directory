import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePipelineExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;
}
