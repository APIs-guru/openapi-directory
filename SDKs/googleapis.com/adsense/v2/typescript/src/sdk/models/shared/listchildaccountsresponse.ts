import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


// ListChildAccountsResponse
/** 
 * Response definition for the child account list rpc.
**/
export class ListChildAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: Account[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
