import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



// ListAccountsResponse
/** 
 * Response definition for the account list rpc.
**/
export class ListAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: Account })
  accounts?: Account[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
