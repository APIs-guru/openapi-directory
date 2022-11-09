import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectCompact } from "./projectcompact";
import { TaskCompact } from "./taskcompact";

export enum JobResponseStatusEnum {
    NotStarted = "not_started"
,    InProgress = "in_progress"
,    Completed = "completed"
,    Failed = "failed"
}


export class JobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=new_project" })
  newProject?: ProjectCompact;

  @Metadata({ data: "json, name=new_task" })
  newTask?: TaskCompact;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=status" })
  status?: JobResponseStatusEnum;
}
