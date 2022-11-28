import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";
export declare enum TaskRequestApprovalStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    ChangesRequested = "changes_requested"
}
export declare enum TaskRequestAssigneeStatusEnum {
    Today = "today",
    Upcoming = "upcoming",
    Later = "later",
    New = "new",
    Inbox = "inbox"
}
/**
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
export declare class TaskRequestExternal extends SpeakeasyBase {
    data?: string;
    gid?: string;
}
export declare enum TaskRequestResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}
export declare class TaskRequestInput extends SpeakeasyBase {
    approvalStatus?: TaskRequestApprovalStatusEnum;
    assignee?: string;
    assigneeSection?: string;
    assigneeStatus?: TaskRequestAssigneeStatusEnum;
    completed?: boolean;
    completedBy?: UserCompactInput;
    customFields?: Map<string, string>;
    dueAt?: Date;
    dueOn?: Date;
    external?: TaskRequestExternal;
    followers?: string[];
    htmlNotes?: string;
    liked?: boolean;
    name?: string;
    notes?: string;
    parent?: string;
    projects?: string[];
    resourceSubtype?: TaskRequestResourceSubtypeEnum;
    startOn?: Date;
    tags?: string[];
    workspace?: string;
}
