import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineExecutionStep } from "./pipelineexecutionstep";


export class ListPipelineExecutionStepsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PipelineExecutionSteps", elemType: shared.PipelineExecutionStep })
  pipelineExecutionSteps?: PipelineExecutionStep[];
}
