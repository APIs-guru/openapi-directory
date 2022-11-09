import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;
}
