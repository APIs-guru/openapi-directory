import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePipelineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=PipelineName" })
  pipelineName: string;
}
