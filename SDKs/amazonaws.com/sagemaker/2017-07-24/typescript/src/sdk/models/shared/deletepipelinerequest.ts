import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineName" })
  pipelineName: string;
}
