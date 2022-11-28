import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectDuplicateRequestIncludeEnum {
    Members = "members",
    Notes = "notes",
    Forms = "forms",
    TaskNotes = "task_notes",
    TaskAssignee = "task_assignee",
    TaskSubtasks = "task_subtasks",
    TaskAttachments = "task_attachments",
    TaskDates = "task_dates",
    TaskDependencies = "task_dependencies",
    TaskFollowers = "task_followers",
    TaskTags = "task_tags",
    TaskProjects = "task_projects"
}
/**
 * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.
**/
export declare class ProjectDuplicateRequestScheduleDates extends SpeakeasyBase {
    dueOn?: string;
    shouldSkipWeekends: boolean;
    startOn?: string;
}
export declare class ProjectDuplicateRequest extends SpeakeasyBase {
    include?: ProjectDuplicateRequestIncludeEnum;
    name: string;
    scheduleDates?: ProjectDuplicateRequestScheduleDates;
    team?: string;
}
