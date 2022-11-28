import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberAccount } from "./memberaccount";



export class ListMemberAccountsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberAccounts", elemType: MemberAccount })
  memberAccounts?: MemberAccount[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
