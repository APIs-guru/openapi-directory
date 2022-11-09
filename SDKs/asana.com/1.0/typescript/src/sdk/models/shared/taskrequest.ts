import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { AsanaResource } from "./asanaresource";
import { AsanaResource } from "./asanaresource";
import { Like } from "./like";
import { Like } from "./like";
import { ProjectCompact } from "./projectcompact";
import { SectionCompact } from "./sectioncompact";

export enum TaskRequestApprovalStatusEnum {
    Pending = "pending"
,    Approved = "approved"
,    Rejected = "rejected"
,    ChangesRequested = "changes_requested"
}

export enum TaskRequestAssigneeStatusEnum {
    Today = "today"
,    Upcoming = "upcoming"
,    Later = "later"
,    New = "new"
,    Inbox = "inbox"
}


// TaskRequestExternal
/** 
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
export class TaskRequestExternal extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;
}


export class TaskRequestMemberships extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @Metadata({ data: "json, name=section" })
  section?: SectionCompact;
}

export enum TaskRequestResourceSubtypeEnum {
    DefaultTask = "default_task"
,    Milestone = "milestone"
,    Section = "section"
,    Approval = "approval"
}


export class TaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=approval_status" })
  approvalStatus?: TaskRequestApprovalStatusEnum;

  @Metadata({ data: "json, name=assignee" })
  assignee?: string;

  @Metadata({ data: "json, name=assignee_section" })
  assigneeSection?: string;

  @Metadata({ data: "json, name=assignee_status" })
  assigneeStatus?: TaskRequestAssigneeStatusEnum;

  @Metadata({ data: "json, name=completed" })
  completed?: boolean;

  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=completed_by" })
  completedBy?: UserCompact;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, string>;

  @Metadata({ data: "json, name=dependencies", elemType: shared.AsanaResource })
  dependencies?: AsanaResource[];

  @Metadata({ data: "json, name=dependents", elemType: shared.AsanaResource })
  dependents?: AsanaResource[];

  @Metadata({ data: "json, name=due_at" })
  dueAt?: Date;

  @Metadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "json, name=external" })
  external?: TaskRequestExternal;

  @Metadata({ data: "json, name=followers" })
  followers?: string[];

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=hearted" })
  hearted?: boolean;

  @Metadata({ data: "json, name=hearts", elemType: shared.Like })
  hearts?: Like[];

  @Metadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @Metadata({ data: "json, name=is_rendered_as_separator" })
  isRenderedAsSeparator?: boolean;

  @Metadata({ data: "json, name=liked" })
  liked?: boolean;

  @Metadata({ data: "json, name=likes", elemType: shared.Like })
  likes?: Like[];

  @Metadata({ data: "json, name=memberships", elemType: shared.TaskRequestMemberships })
  memberships?: TaskRequestMemberships[];

  @Metadata({ data: "json, name=modified_at" })
  modifiedAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=num_hearts" })
  numHearts?: number;

  @Metadata({ data: "json, name=num_likes" })
  numLikes?: number;

  @Metadata({ data: "json, name=num_subtasks" })
  numSubtasks?: number;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=projects" })
  projects?: string[];

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: TaskRequestResourceSubtypeEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_on" })
  startOn?: Date;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=workspace" })
  workspace?: string;
}
