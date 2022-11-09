import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WorldExportJobSummary } from "./worldexportjobsummary";
export declare class ListWorldExportJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    worldExportJobSummaries: WorldExportJobSummary[];
}
