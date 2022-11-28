import { SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
import { Result } from "./result";
export declare class GetMembersResponse extends SpeakeasyBase {
    members?: Member[];
    unprocessedAccounts?: Result[];
}
