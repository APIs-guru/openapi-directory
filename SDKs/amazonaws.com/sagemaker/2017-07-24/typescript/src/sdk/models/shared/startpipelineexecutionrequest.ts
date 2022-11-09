import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parameter } from "./parameter";


export class StartPipelineExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=PipelineExecutionDescription" })
  pipelineExecutionDescription?: string;

  @Metadata({ data: "json, name=PipelineExecutionDisplayName" })
  pipelineExecutionDisplayName?: string;

  @Metadata({ data: "json, name=PipelineName" })
  pipelineName: string;

  @Metadata({ data: "json, name=PipelineParameters", elemType: shared.Parameter })
  pipelineParameters?: Parameter[];
}
