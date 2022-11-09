import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LongTermPricingTypeEnum } from "./longtermpricingtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";


// LongTermPricingListEntry
/** 
 * Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type.
**/
export class LongTermPricingListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentActiveJob" })
  currentActiveJob?: string;

  @Metadata({ data: "json, name=IsLongTermPricingAutoRenew" })
  isLongTermPricingAutoRenew?: boolean;

  @Metadata({ data: "json, name=JobIds" })
  jobIds?: string[];

  @Metadata({ data: "json, name=LongTermPricingEndDate" })
  longTermPricingEndDate?: Date;

  @Metadata({ data: "json, name=LongTermPricingId" })
  longTermPricingId?: string;

  @Metadata({ data: "json, name=LongTermPricingStartDate" })
  longTermPricingStartDate?: Date;

  @Metadata({ data: "json, name=LongTermPricingStatus" })
  longTermPricingStatus?: string;

  @Metadata({ data: "json, name=LongTermPricingType" })
  longTermPricingType?: LongTermPricingTypeEnum;

  @Metadata({ data: "json, name=ReplacementJob" })
  replacementJob?: string;

  @Metadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;
}
