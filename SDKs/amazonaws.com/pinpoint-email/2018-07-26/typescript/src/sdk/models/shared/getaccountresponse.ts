import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SendQuota } from "./sendquota";



// GetAccountResponse
/** 
 * A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region.
**/
export class GetAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DedicatedIpAutoWarmupEnabled" })
  dedicatedIpAutoWarmupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnforcementStatus" })
  enforcementStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductionAccessEnabled" })
  productionAccessEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SendQuota" })
  sendQuota?: SendQuota;

  @SpeakeasyMetadata({ data: "json, name=SendingEnabled" })
  sendingEnabled?: boolean;
}
