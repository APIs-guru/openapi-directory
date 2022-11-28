import { SpeakeasyBase } from "../../../internal/utils";
import { ImportJobResponse } from "./importjobresponse";
/**
 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
**/
export declare class ImportJobsResponse extends SpeakeasyBase {
    item: ImportJobResponse[];
    nextToken?: string;
}
