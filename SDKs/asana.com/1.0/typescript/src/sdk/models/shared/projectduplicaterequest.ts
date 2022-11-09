import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectDuplicateRequestIncludeEnum {
    Members = "members"
,    Notes = "notes"
,    Forms = "forms"
,    TaskNotes = "task_notes"
,    TaskAssignee = "task_assignee"
,    TaskSubtasks = "task_subtasks"
,    TaskAttachments = "task_attachments"
,    TaskDates = "task_dates"
,    TaskDependencies = "task_dependencies"
,    TaskFollowers = "task_followers"
,    TaskTags = "task_tags"
,    TaskProjects = "task_projects"
}


// ProjectDuplicateRequestScheduleDates
/** 
 * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.
**/
export class ProjectDuplicateRequestScheduleDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=due_on" })
  dueOn?: string;

  @Metadata({ data: "json, name=should_skip_weekends" })
  shouldSkipWeekends: boolean;

  @Metadata({ data: "json, name=start_on" })
  startOn?: string;
}


export class ProjectDuplicateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=include" })
  include?: ProjectDuplicateRequestIncludeEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=schedule_dates" })
  scheduleDates?: ProjectDuplicateRequestScheduleDates;

  @Metadata({ data: "json, name=team" })
  team?: string;
}
