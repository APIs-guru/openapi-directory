import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


// AccountsList
/** 
 * An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
**/
export class AccountsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Account })
  items?: Account[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
