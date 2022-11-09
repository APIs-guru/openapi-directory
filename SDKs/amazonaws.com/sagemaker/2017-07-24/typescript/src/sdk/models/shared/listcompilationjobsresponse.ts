import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompilationJobSummary } from "./compilationjobsummary";


export class ListCompilationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompilationJobSummaries", elemType: shared.CompilationJobSummary })
  compilationJobSummaries: CompilationJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
