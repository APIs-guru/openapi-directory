import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";


export class DescribeAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account" })
  account?: Account;
}
