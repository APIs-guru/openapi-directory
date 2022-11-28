import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { CustomFieldResponse } from "./customfieldresponse";
import { AsanaResource } from "./asanaresource";
import { Like } from "./like";
import { ProjectCompact } from "./projectcompact";
import { SectionCompact } from "./sectioncompact";
import { TagCompact } from "./tagcompact";


export enum TaskResponseApprovalStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    ChangesRequested = "changes_requested"
}


export class TaskResponseAssignee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class TaskResponseAssigneeSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum TaskResponseAssigneeStatusEnum {
    Today = "today",
    Upcoming = "upcoming",
    Later = "later",
    New = "new",
    Inbox = "inbox"
}


// TaskResponseExternal
/** 
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
export class TaskResponseExternal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;
}


export class TaskResponseMemberships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: SectionCompact;
}


export class TaskResponseParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}

export enum TaskResponseResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}


export class TaskResponseWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class TaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approval_status" })
  approvalStatus?: TaskResponseApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: TaskResponseAssignee;

  @SpeakeasyMetadata({ data: "json, name=assignee_section" })
  assigneeSection?: TaskResponseAssigneeSection;

  @SpeakeasyMetadata({ data: "json, name=assignee_status" })
  assigneeStatus?: TaskResponseAssigneeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=completed_by" })
  completedBy?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomFieldResponse })
  customFields?: CustomFieldResponse[];

  @SpeakeasyMetadata({ data: "json, name=dependencies", elemType: AsanaResource })
  dependencies?: AsanaResource[];

  @SpeakeasyMetadata({ data: "json, name=dependents", elemType: AsanaResource })
  dependents?: AsanaResource[];

  @SpeakeasyMetadata({ data: "json, name=due_at" })
  dueAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=external" })
  external?: TaskResponseExternal;

  @SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompact })
  followers?: UserCompact[];

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=hearted" })
  hearted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hearts", elemType: Like })
  hearts?: Like[];

  @SpeakeasyMetadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=is_rendered_as_separator" })
  isRenderedAsSeparator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liked" })
  liked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=likes", elemType: Like })
  likes?: Like[];

  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: TaskResponseMemberships })
  memberships?: TaskResponseMemberships[];

  @SpeakeasyMetadata({ data: "json, name=modified_at" })
  modifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=num_hearts" })
  numHearts?: number;

  @SpeakeasyMetadata({ data: "json, name=num_likes" })
  numLikes?: number;

  @SpeakeasyMetadata({ data: "json, name=num_subtasks" })
  numSubtasks?: number;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: TaskResponseParent;

  @SpeakeasyMetadata({ data: "json, name=permalink_url" })
  permalinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: ProjectCompact })
  projects?: ProjectCompact[];

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: TaskResponseResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: TagCompact })
  tags?: TagCompact[];

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: TaskResponseWorkspace;
}
