import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountDetails } from "./accountdetails";
import { SendQuota } from "./sendquota";
import { SuppressionAttributes } from "./suppressionattributes";



// GetAccountResponse
/** 
 * A list of details about the email-sending capabilities of your Amazon SES account in the current AWS Region.
**/
export class GetAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedIpAutoWarmupEnabled" })
  dedicatedIpAutoWarmupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: AccountDetails;

  @SpeakeasyMetadata({ data: "json, name=EnforcementStatus" })
  enforcementStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductionAccessEnabled" })
  productionAccessEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SendQuota" })
  sendQuota?: SendQuota;

  @SpeakeasyMetadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SuppressionAttributes" })
  suppressionAttributes?: SuppressionAttributes;
}
