import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudApigeeV1AdjustDeveloperBalanceRequest
/** 
 * Request for AdjustDeveloperBalance.
**/
export class GoogleCloudApigeeV1AdjustDeveloperBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustment" })
  adjustment?: GoogleTypeMoney;
}
