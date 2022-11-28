import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompilationJobSummary } from "./compilationjobsummary";



export class ListCompilationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationJobSummaries", elemType: CompilationJobSummary })
  compilationJobSummaries: CompilationJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
