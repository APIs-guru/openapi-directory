import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobSummary } from "./automljobsummary";
export declare class ListAutoMlJobsResponse extends SpeakeasyBase {
    autoMlJobSummaries: AutoMlJobSummary[];
    nextToken?: string;
}
