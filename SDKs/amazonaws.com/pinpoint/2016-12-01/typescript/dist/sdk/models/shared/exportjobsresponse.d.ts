import { SpeakeasyBase } from "../../../internal/utils";
import { ExportJobResponse } from "./exportjobresponse";
/**
 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
**/
export declare class ExportJobsResponse extends SpeakeasyBase {
    item: ExportJobResponse[];
    nextToken?: string;
}
