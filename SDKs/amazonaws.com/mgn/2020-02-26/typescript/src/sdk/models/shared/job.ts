import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InitiatedByEnum } from "./initiatedbyenum";
import { ParticipatingServer } from "./participatingserver";
import { JobStatusEnum } from "./jobstatusenum";
import { JobTypeEnum } from "./jobtypeenum";



// Job
/** 
 * Job.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=initiatedBy" })
  initiatedBy?: InitiatedByEnum;

  @SpeakeasyMetadata({ data: "json, name=jobID" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=participatingServers", elemType: ParticipatingServer })
  participatingServers?: ParticipatingServer[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: JobTypeEnum;
}
