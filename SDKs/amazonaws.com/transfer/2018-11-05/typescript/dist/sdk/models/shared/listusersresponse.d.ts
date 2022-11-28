import { SpeakeasyBase } from "../../../internal/utils";
import { ListedUser } from "./listeduser";
export declare class ListUsersResponse extends SpeakeasyBase {
    nextToken?: string;
    serverId: string;
    users: ListedUser[];
}
