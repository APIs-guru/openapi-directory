import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendPipelineExecutionStepFailureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
