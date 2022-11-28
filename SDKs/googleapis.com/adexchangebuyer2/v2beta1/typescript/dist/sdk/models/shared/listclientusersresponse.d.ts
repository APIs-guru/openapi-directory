import { SpeakeasyBase } from "../../../internal/utils";
import { ClientUser } from "./clientuser";
export declare class ListClientUsersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    users?: ClientUser[];
}
