import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Collaborator } from "./collaborator";
import { CommentPermissions } from "./commentpermissions";
export declare class Comment extends SpeakeasyBase {
    createdBy?: Collaborator;
    dateCreated?: Date;
    id?: string;
    permissions?: CommentPermissions;
    text?: string;
}
