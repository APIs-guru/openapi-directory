import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendPipelineExecutionStepSuccessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineExecutionArn" })
  pipelineExecutionArn?: string;
}
