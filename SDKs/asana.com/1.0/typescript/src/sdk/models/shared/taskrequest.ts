import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";


export enum TaskRequestApprovalStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    ChangesRequested = "changes_requested"
}

export enum TaskRequestAssigneeStatusEnum {
    Today = "today",
    Upcoming = "upcoming",
    Later = "later",
    New = "new",
    Inbox = "inbox"
}


// TaskRequestExternal
/** 
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
export class TaskRequestExternal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;
}

export enum TaskRequestResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}


export class TaskRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approval_status" })
  approvalStatus?: TaskRequestApprovalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: string;

  @SpeakeasyMetadata({ data: "json, name=assignee_section" })
  assigneeSection?: string;

  @SpeakeasyMetadata({ data: "json, name=assignee_status" })
  assigneeStatus?: TaskRequestAssigneeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=completed_by" })
  completedBy?: UserCompactInput;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=due_at" })
  dueAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=due_on" })
  dueOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=external" })
  external?: TaskRequestExternal;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers?: string[];

  @SpeakeasyMetadata({ data: "json, name=html_notes" })
  htmlNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=liked" })
  liked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=projects" })
  projects?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: TaskRequestResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=start_on" })
  startOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: string;
}
