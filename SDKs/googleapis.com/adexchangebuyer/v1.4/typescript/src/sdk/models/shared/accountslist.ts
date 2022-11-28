import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



// AccountsList
/** 
 * An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
**/
export class AccountsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Account })
  items?: Account[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
