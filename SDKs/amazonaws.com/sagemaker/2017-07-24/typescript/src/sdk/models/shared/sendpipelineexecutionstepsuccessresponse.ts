import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendPipelineExecutionStepSuccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
