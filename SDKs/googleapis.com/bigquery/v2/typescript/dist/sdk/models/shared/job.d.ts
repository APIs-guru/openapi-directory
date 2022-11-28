import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfiguration } from "./jobconfiguration";
import { JobReference } from "./jobreference";
import { JobStatistics } from "./jobstatistics";
import { JobStatus } from "./jobstatus";
export declare class Job extends SpeakeasyBase {
    configuration?: JobConfiguration;
    etag?: string;
    id?: string;
    jobReference?: JobReference;
    kind?: string;
    selfLink?: string;
    statistics?: JobStatistics;
    status?: JobStatus;
    userEmail?: string;
}
