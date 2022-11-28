import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageByAccount } from "./usagebyaccount";



// UsageRecord
/** 
 * Provides quota and aggregated usage data for an Amazon Macie account.
**/
export class UsageRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=freeTrialStartDate" })
  freeTrialStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=usage", elemType: UsageByAccount })
  usage?: UsageByAccount[];
}
