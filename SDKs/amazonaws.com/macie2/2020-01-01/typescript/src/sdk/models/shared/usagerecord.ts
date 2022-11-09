import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UsageByAccount } from "./usagebyaccount";


// UsageRecord
/** 
 * Provides quota and aggregated usage data for an Amazon Macie account.
**/
export class UsageRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=freeTrialStartDate" })
  freeTrialStartDate?: Date;

  @Metadata({ data: "json, name=usage", elemType: shared.UsageByAccount })
  usage?: UsageByAccount[];
}
