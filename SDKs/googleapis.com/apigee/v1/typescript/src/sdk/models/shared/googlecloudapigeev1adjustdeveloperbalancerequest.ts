import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeMoney } from "./googletypemoney";


// GoogleCloudApigeeV1AdjustDeveloperBalanceRequest
/** 
 * Request for AdjustDeveloperBalance.
**/
export class GoogleCloudApigeeV1AdjustDeveloperBalanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustment" })
  adjustment?: GoogleTypeMoney;
}
