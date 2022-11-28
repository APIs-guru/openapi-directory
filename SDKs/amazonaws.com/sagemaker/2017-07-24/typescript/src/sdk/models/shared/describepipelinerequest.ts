import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PipelineName" })
  pipelineName: string;
}
