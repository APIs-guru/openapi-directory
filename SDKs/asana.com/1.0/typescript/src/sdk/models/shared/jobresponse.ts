import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { TaskCompact } from "./taskcompact";


export enum JobResponseStatusEnum {
    NotStarted = "not_started",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed"
}


export class JobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=new_project" })
  newProject?: ProjectCompact;

  @SpeakeasyMetadata({ data: "json, name=new_task" })
  newTask?: TaskCompact;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobResponseStatusEnum;
}
