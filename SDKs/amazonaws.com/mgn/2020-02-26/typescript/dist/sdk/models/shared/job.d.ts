import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InitiatedByEnum } from "./initiatedbyenum";
import { ParticipatingServer } from "./participatingserver";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Job.
**/
export declare class Job extends SpeakeasyBase {
    arn?: string;
    creationDateTime?: string;
    endDateTime?: string;
    initiatedBy?: InitiatedByEnum;
    jobId: string;
    participatingServers?: ParticipatingServer[];
    status?: JobStatusEnum;
    tags?: Map<string, string>;
    type?: JobTypeEnum;
}
