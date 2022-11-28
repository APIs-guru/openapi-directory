import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfiguration } from "./jobconfiguration";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { JobStatistics } from "./jobstatistics";
import { JobStatus } from "./jobstatus";
export declare class JobListJobs extends SpeakeasyBase {
    configuration?: JobConfiguration;
    errorResult?: ErrorProto;
    id?: string;
    jobReference?: JobReference;
    kind?: string;
    state?: string;
    statistics?: JobStatistics;
    status?: JobStatus;
    userEmail?: string;
}
export declare class JobList extends SpeakeasyBase {
    etag?: string;
    jobs?: JobListJobs[];
    kind?: string;
    nextPageToken?: string;
}
