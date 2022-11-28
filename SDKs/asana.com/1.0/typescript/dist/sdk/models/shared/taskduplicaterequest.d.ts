import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaskDuplicateRequestIncludeEnum {
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
export declare class TaskDuplicateRequest extends SpeakeasyBase {
    include?: TaskDuplicateRequestIncludeEnum;
    name?: string;
}
