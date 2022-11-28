import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



export class ListAccountsForParentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accounts", elemType: Account })
  accounts?: Account[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
