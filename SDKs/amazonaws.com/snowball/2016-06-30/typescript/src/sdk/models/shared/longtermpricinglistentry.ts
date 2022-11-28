import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LongTermPricingTypeEnum } from "./longtermpricingtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";



// LongTermPricingListEntry
/** 
 * Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type.
**/
export class LongTermPricingListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentActiveJob" })
  currentActiveJob?: string;

  @SpeakeasyMetadata({ data: "json, name=IsLongTermPricingAutoRenew" })
  isLongTermPricingAutoRenew?: boolean;

  @SpeakeasyMetadata({ data: "json, name=JobIds" })
  jobIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=LongTermPricingEndDate" })
  longTermPricingEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LongTermPricingId" })
  longTermPricingId?: string;

  @SpeakeasyMetadata({ data: "json, name=LongTermPricingStartDate" })
  longTermPricingStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LongTermPricingStatus" })
  longTermPricingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=LongTermPricingType" })
  longTermPricingType?: LongTermPricingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ReplacementJob" })
  replacementJob?: string;

  @SpeakeasyMetadata({ data: "json, name=SnowballType" })
  snowballType?: SnowballTypeEnum;
}
