import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;
}
