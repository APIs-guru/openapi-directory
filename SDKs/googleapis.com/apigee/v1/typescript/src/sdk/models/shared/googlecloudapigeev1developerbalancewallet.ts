import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudApigeeV1DeveloperBalanceWallet
/** 
 * Wallet used to manage an account balance for a particular currency.
**/
export class GoogleCloudApigeeV1DeveloperBalanceWallet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=lastCreditTime" })
  lastCreditTime?: string;
}
