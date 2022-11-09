import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;
}
