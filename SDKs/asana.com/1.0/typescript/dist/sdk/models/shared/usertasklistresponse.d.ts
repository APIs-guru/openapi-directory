import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.
**/
export declare class UserTaskListResponseOwner extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * The workspace in which the user task list is located.
**/
export declare class UserTaskListResponseWorkspace extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare class UserTaskListResponse extends SpeakeasyBase {
    gid?: string;
    name?: string;
    owner?: UserTaskListResponseOwner;
    resourceType?: string;
    workspace?: UserTaskListResponseWorkspace;
}
