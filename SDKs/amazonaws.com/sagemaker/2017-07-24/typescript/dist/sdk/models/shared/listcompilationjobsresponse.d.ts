import { SpeakeasyBase } from "../../../internal/utils";
import { CompilationJobSummary } from "./compilationjobsummary";
export declare class ListCompilationJobsResponse extends SpeakeasyBase {
    compilationJobSummaries: CompilationJobSummary[];
    nextToken?: string;
}
