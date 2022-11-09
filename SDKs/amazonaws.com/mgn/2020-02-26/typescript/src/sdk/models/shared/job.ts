import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InitiatedByEnum } from "./initiatedbyenum";
import { ParticipatingServer } from "./participatingserver";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";


// Job
/** 
 * Job.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: string;

  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: string;

  @Metadata({ data: "json, name=initiatedBy" })
  initiatedBy?: InitiatedByEnum;

  @Metadata({ data: "json, name=jobID" })
  jobId: string;

  @Metadata({ data: "json, name=participatingServers", elemType: shared.ParticipatingServer })
  participatingServers?: ParticipatingServer[];

  @Metadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: JobTypeEnum;
}
