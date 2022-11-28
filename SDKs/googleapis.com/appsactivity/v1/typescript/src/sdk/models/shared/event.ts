import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Move } from "./move";
import { PermissionChange } from "./permissionchange";
import { Rename } from "./rename";
import { Target } from "./target";
import { User } from "./user";


export enum EventAdditionalEventTypesEnum {
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

export enum EventPrimaryEventTypeEnum {
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


// Event
/** 
 * Represents the changes associated with an action taken by a user.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalEventTypes" })
  additionalEventTypes?: EventAdditionalEventTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=eventTimeMillis" })
  eventTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=fromUserDeletion" })
  fromUserDeletion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=move" })
  move?: Move;

  @SpeakeasyMetadata({ data: "json, name=permissionChanges", elemType: PermissionChange })
  permissionChanges?: PermissionChange[];

  @SpeakeasyMetadata({ data: "json, name=primaryEventType" })
  primaryEventType?: EventPrimaryEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=rename" })
  rename?: Rename;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: Target;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
