import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudApigeeV1CreditDeveloperBalanceRequest
/** 
 * Request for CreditDeveloperBalance.
**/
export class GoogleCloudApigeeV1CreditDeveloperBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionAmount" })
  transactionAmount?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
