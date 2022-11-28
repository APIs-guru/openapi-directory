import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionSummary } from "./pipelineexecutionsummary";



export class ListPipelineExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineExecutionSummaries", elemType: PipelineExecutionSummary })
  pipelineExecutionSummaries?: PipelineExecutionSummary[];
}
