import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaskDuplicateRequestIncludeEnum {
    Notes = "notes",
    Assignee = "assignee",
    Subtasks = "subtasks",
    Attachments = "attachments",
    Tags = "tags",
    Followers = "followers",
    Projects = "projects",
    Dates = "dates",
    Dependencies = "dependencies",
    Parent = "parent"
}


export class TaskDuplicateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: TaskDuplicateRequestIncludeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
