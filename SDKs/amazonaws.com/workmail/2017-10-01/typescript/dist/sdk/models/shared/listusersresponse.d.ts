import { SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";
export declare class ListUsersResponse extends SpeakeasyBase {
    nextToken?: string;
    users?: User[];
}
