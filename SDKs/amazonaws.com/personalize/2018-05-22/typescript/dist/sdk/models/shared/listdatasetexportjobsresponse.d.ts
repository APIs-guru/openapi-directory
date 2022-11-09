import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetExportJobSummary } from "./datasetexportjobsummary";
export declare class ListDatasetExportJobsResponse extends SpeakeasyBase {
    datasetExportJobs?: DatasetExportJobSummary[];
    nextToken?: string;
}
