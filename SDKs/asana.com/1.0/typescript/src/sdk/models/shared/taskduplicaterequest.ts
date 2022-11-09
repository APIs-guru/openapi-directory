import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TaskDuplicateRequestIncludeEnum {
    Notes = "notes"
,    Assignee = "assignee"
,    Subtasks = "subtasks"
,    Attachments = "attachments"
,    Tags = "tags"
,    Followers = "followers"
,    Projects = "projects"
,    Dates = "dates"
,    Dependencies = "dependencies"
,    Parent = "parent"
}


export class TaskDuplicateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=include" })
  include?: TaskDuplicateRequestIncludeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
