import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberAccount } from "./memberaccount";
export declare class ListMemberAccountsResult extends SpeakeasyBase {
    memberAccounts?: MemberAccount[];
    nextToken?: string;
}
