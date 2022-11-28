import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



export class DescribeAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account?: Account;
}
