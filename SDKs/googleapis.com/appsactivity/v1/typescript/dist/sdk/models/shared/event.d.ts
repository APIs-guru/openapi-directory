import { SpeakeasyBase } from "../../../internal/utils";
import { Move } from "./move";
import { PermissionChange } from "./permissionchange";
import { Rename } from "./rename";
import { Target } from "./target";
import { User } from "./user";
export declare enum EventAdditionalEventTypesEnum {
    Comment = "comment",
    Create = "create",
    Edit = "edit",
    EmptyTrash = "emptyTrash",
    Move = "move",
    PermissionChange = "permissionChange",
    Rename = "rename",
    Trash = "trash",
    Unknown = "unknown",
    Untrash = "untrash",
    Upload = "upload"
}
export declare enum EventPrimaryEventTypeEnum {
    Comment = "comment",
    Create = "create",
    Edit = "edit",
    EmptyTrash = "emptyTrash",
    Move = "move",
    PermissionChange = "permissionChange",
    Rename = "rename",
    Trash = "trash",
    Unknown = "unknown",
    Untrash = "untrash",
    Upload = "upload"
}
/**
 * Represents the changes associated with an action taken by a user.
**/
export declare class Event extends SpeakeasyBase {
    additionalEventTypes?: EventAdditionalEventTypesEnum[];
    eventTimeMillis?: string;
    fromUserDeletion?: boolean;
    move?: Move;
    permissionChanges?: PermissionChange[];
    primaryEventType?: EventPrimaryEventTypeEnum;
    rename?: Rename;
    target?: Target;
    user?: User;
}
