import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionStep } from "./pipelineexecutionstep";



export class ListPipelineExecutionStepsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionSteps", elemType: PipelineExecutionStep })
  pipelineExecutionSteps?: PipelineExecutionStep[];
}
