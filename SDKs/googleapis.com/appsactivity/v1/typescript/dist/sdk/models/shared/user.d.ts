import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
/**
 * A representation of a user.
**/
export declare class User extends SpeakeasyBase {
    isDeleted?: boolean;
    isMe?: boolean;
    name?: string;
    permissionId?: string;
    photo?: Photo;
}
