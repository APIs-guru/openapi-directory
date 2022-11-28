import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;
}
