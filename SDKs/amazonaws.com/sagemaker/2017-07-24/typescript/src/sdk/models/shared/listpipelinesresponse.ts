import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineSummary } from "./pipelinesummary";



export class ListPipelinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PipelineSummaries", elemType: PipelineSummary })
  pipelineSummaries?: PipelineSummary[];
}
