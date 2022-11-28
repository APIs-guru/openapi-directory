import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A response containing one or more users with access to an account.
**/
export declare class ListUsersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    users?: User[];
}
