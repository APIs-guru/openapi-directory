import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineArn" })
  pipelineArn?: string;
}
