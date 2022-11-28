import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



export class StartPipelineExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineName" })
  pipelineName: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineParameters", elemType: Parameter })
  pipelineParameters?: Parameter[];
}
