import { SpeakeasyBase } from "../../../internal/utils";
import { JobStateEnum } from "./jobstateenum";
import { JobTypeEnum } from "./jobtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
/**
 * Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job.
**/
export declare class JobListEntry extends SpeakeasyBase {
    creationDate?: Date;
    description?: string;
    isMaster?: boolean;
    jobId?: string;
    jobState?: JobStateEnum;
    jobType?: JobTypeEnum;
    snowballType?: SnowballTypeEnum;
}
