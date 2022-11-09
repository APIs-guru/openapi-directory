import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Member } from "./member";
export declare class ListGroupMembersResponse extends SpeakeasyBase {
    members?: Member[];
    nextToken?: string;
}
