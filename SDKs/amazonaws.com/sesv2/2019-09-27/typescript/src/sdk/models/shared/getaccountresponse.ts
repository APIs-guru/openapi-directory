import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountDetails } from "./accountdetails";
import { SendQuota } from "./sendquota";
import { SuppressionAttributes } from "./suppressionattributes";


// GetAccountResponse
/** 
 * A list of details about the email-sending capabilities of your Amazon SES account in the current AWS Region.
**/
export class GetAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedIpAutoWarmupEnabled" })
  dedicatedIpAutoWarmupEnabled?: boolean;

  @Metadata({ data: "json, name=Details" })
  details?: AccountDetails;

  @Metadata({ data: "json, name=EnforcementStatus" })
  enforcementStatus?: string;

  @Metadata({ data: "json, name=ProductionAccessEnabled" })
  productionAccessEnabled?: boolean;

  @Metadata({ data: "json, name=SendQuota" })
  sendQuota?: SendQuota;

  @Metadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;

  @Metadata({ data: "json, name=SuppressionAttributes" })
  suppressionAttributes?: SuppressionAttributes;
}
