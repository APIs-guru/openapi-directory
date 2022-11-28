import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;
}
