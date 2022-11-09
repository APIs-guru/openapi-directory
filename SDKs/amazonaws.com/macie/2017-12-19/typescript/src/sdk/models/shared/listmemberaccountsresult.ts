import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberAccount } from "./memberaccount";


export class ListMemberAccountsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberAccounts", elemType: shared.MemberAccount })
  memberAccounts?: MemberAccount[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
