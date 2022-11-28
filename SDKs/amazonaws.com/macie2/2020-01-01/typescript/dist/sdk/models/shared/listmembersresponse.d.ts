import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
export declare class ListMembersResponse extends SpeakeasyBase {
    members?: Member[];
    nextToken?: string;
}
