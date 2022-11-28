import { SpeakeasyBase } from "../../../internal/utils";
import { ClientUser } from "./clientuser";
/**
 * Response message for the list method.
**/
export declare class ListClientUsersResponse extends SpeakeasyBase {
    clientUsers?: ClientUser[];
    nextPageToken?: string;
}
