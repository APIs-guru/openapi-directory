import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePipelineExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;
}
