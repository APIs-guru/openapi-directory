import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parameter } from "./parameter";


export class ListPipelineParametersForExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PipelineParameters", elemType: shared.Parameter })
  pipelineParameters?: Parameter[];
}
