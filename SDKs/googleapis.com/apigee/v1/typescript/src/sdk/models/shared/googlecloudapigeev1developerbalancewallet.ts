import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeMoney } from "./googletypemoney";


// GoogleCloudApigeeV1DeveloperBalanceWallet
/** 
 * Wallet used to manage an account balance for a particular currency.
**/
export class GoogleCloudApigeeV1DeveloperBalanceWallet extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: GoogleTypeMoney;

  @Metadata({ data: "json, name=lastCreditTime" })
  lastCreditTime?: string;
}
