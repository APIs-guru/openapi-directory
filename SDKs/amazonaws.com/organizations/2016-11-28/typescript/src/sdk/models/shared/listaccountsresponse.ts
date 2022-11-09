import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


export class ListAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accounts", elemType: shared.Account })
  accounts?: Account[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
