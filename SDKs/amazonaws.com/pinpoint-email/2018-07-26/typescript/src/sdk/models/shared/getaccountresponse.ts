import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SendQuota } from "./sendquota";


// GetAccountResponse
/** 
 * A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region.
**/
export class GetAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DedicatedIpAutoWarmupEnabled" })
  dedicatedIpAutoWarmupEnabled?: boolean;

  @Metadata({ data: "json, name=EnforcementStatus" })
  enforcementStatus?: string;

  @Metadata({ data: "json, name=ProductionAccessEnabled" })
  productionAccessEnabled?: boolean;

  @Metadata({ data: "json, name=SendQuota" })
  sendQuota?: SendQuota;

  @Metadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}
