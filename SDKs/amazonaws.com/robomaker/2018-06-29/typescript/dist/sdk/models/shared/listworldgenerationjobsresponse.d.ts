import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldGenerationJobSummary } from "./worldgenerationjobsummary";
export declare class ListWorldGenerationJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    worldGenerationJobSummaries: WorldGenerationJobSummary[];
}
