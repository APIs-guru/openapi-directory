import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataIngestionJobSummary } from "./dataingestionjobsummary";
export declare class ListDataIngestionJobsResponse extends SpeakeasyBase {
    dataIngestionJobSummaries?: DataIngestionJobSummary[];
    nextToken?: string;
}
