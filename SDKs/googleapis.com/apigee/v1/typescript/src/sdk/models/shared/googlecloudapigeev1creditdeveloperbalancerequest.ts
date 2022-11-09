import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeMoney } from "./googletypemoney";


// GoogleCloudApigeeV1CreditDeveloperBalanceRequest
/** 
 * Request for CreditDeveloperBalance.
**/
export class GoogleCloudApigeeV1CreditDeveloperBalanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionAmount" })
  transactionAmount?: GoogleTypeMoney;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
