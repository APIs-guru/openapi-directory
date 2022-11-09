import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineSummary } from "./pipelinesummary";


export class ListPipelinesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PipelineSummaries", elemType: shared.PipelineSummary })
  pipelineSummaries?: PipelineSummary[];
}
