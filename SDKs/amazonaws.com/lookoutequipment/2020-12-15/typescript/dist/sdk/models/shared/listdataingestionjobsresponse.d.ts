import { SpeakeasyBase } from "../../../internal/utils";
import { DataIngestionJobSummary } from "./dataingestionjobsummary";
export declare class ListDataIngestionJobsResponse extends SpeakeasyBase {
    dataIngestionJobSummaries?: DataIngestionJobSummary[];
    nextToken?: string;
}
