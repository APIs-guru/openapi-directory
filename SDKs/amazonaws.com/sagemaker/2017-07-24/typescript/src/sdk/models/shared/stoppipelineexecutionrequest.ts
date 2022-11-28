import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPipelineExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn: string;
}
