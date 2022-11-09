import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { CustomFieldResponse } from "./customfieldresponse";
import { AsanaResource } from "./asanaresource";
import { AsanaResource } from "./asanaresource";
import { UserCompact } from "./usercompact";
import { Like } from "./like";
import { Like } from "./like";
import { ProjectCompact } from "./projectcompact";
import { SectionCompact } from "./sectioncompact";
import { ProjectCompact } from "./projectcompact";
import { TagCompact } from "./tagcompact";

export enum TaskResponseApprovalStatusEnum {
    Pending = "pending"
,    Approved = "approved"
,    Rejected = "rejected"
,    ChangesRequested = "changes_requested"
}


export class TaskResponseAssignee extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class TaskResponseAssigneeSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum TaskResponseAssigneeStatusEnum {
    Today = "today"
,    Upcoming = "upcoming"
,    Later = "later"
,    New = "new"
,    Inbox = "inbox"
}


// TaskResponseExternal
/** 
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
export class TaskResponseExternal extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;
}


export class TaskResponseMemberships extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @Metadata({ data: "json, name=section" })
  section?: SectionCompact;
}


export class TaskResponseParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum TaskResponseResourceSubtypeEnum {
    DefaultTask = "default_task"
,    Milestone = "milestone"
,    Section = "section"
,    Approval = "approval"
}


export class TaskResponseWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class TaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=approval_status" })
  approvalStatus?: TaskResponseApprovalStatusEnum;

  @Metadata({ data: "json, name=assignee" })
  assignee?: TaskResponseAssignee;

  @Metadata({ data: "json, name=assignee_section" })
  assigneeSection?: TaskResponseAssigneeSection;

  @Metadata({ data: "json, name=assignee_status" })
  assigneeStatus?: TaskResponseAssigneeStatusEnum;

  @Metadata({ data: "json, name=completed" })
  completed?: boolean;

  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=completed_by" })
  completedBy?: UserCompact;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=custom_fields", elemType: shared.CustomFieldResponse })
  customFields?: CustomFieldResponse[];

  @Metadata({ data: "json, name=dependencies", elemType: shared.AsanaResource })
  dependencies?: AsanaResource[];

  @Metadata({ data: "json, name=dependents", elemType: shared.AsanaResource })
  dependents?: AsanaResource[];

  @Metadata({ data: "json, name=due_at" })
  dueAt?: Date;

  @Metadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @Metadata({ data: "json, name=external" })
  external?: TaskResponseExternal;

  @Metadata({ data: "json, name=followers", elemType: shared.UserCompact })
  followers?: UserCompact[];

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

  @Metadata({ data: "json, name=memberships", elemType: shared.TaskResponseMemberships })
  memberships?: TaskResponseMemberships[];

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
  parent?: TaskResponseParent;

  @Metadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @Metadata({ data: "json, name=projects", elemType: shared.ProjectCompact })
  projects?: ProjectCompact[];

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: TaskResponseResourceSubtypeEnum;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_on" })
  startOn?: Date;

  @Metadata({ data: "json, name=tags", elemType: shared.TagCompact })
  tags?: TagCompact[];

  @Metadata({ data: "json, name=workspace" })
  workspace?: TaskResponseWorkspace;
}
