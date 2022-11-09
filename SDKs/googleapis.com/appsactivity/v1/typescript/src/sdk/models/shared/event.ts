import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Move } from "./move";
import { PermissionChange } from "./permissionchange";
import { Rename } from "./rename";
import { Target } from "./target";
import { User } from "./user";

export enum EventAdditionalEventTypesEnum {
    Comment = "comment"
,    Create = "create"
,    Edit = "edit"
,    EmptyTrash = "emptyTrash"
,    Move = "move"
,    PermissionChange = "permissionChange"
,    Rename = "rename"
,    Trash = "trash"
,    Unknown = "unknown"
,    Untrash = "untrash"
,    Upload = "upload"
}

export enum EventPrimaryEventTypeEnum {
    Comment = "comment"
,    Create = "create"
,    Edit = "edit"
,    EmptyTrash = "emptyTrash"
,    Move = "move"
,    PermissionChange = "permissionChange"
,    Rename = "rename"
,    Trash = "trash"
,    Unknown = "unknown"
,    Untrash = "untrash"
,    Upload = "upload"
}


// Event
/** 
 * Represents the changes associated with an action taken by a user.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalEventTypes" })
  additionalEventTypes?: EventAdditionalEventTypesEnum[];

  @Metadata({ data: "json, name=eventTimeMillis" })
  eventTimeMillis?: string;

  @Metadata({ data: "json, name=fromUserDeletion" })
  fromUserDeletion?: boolean;

  @Metadata({ data: "json, name=move" })
  move?: Move;

  @Metadata({ data: "json, name=permissionChanges", elemType: shared.PermissionChange })
  permissionChanges?: PermissionChange[];

  @Metadata({ data: "json, name=primaryEventType" })
  primaryEventType?: EventPrimaryEventTypeEnum;

  @Metadata({ data: "json, name=rename" })
  rename?: Rename;

  @Metadata({ data: "json, name=target" })
  target?: Target;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
