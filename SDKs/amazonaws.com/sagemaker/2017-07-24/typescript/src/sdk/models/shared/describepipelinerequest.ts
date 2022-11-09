import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePipelineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PipelineName" })
  pipelineName: string;
}
