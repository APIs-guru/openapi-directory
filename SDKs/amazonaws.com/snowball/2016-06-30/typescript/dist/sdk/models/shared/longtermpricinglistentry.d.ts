import { SpeakeasyBase } from "../../../internal/utils";
import { LongTermPricingTypeEnum } from "./longtermpricingtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
/**
 * Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type.
**/
export declare class LongTermPricingListEntry extends SpeakeasyBase {
    currentActiveJob?: string;
    isLongTermPricingAutoRenew?: boolean;
    jobIds?: string[];
    longTermPricingEndDate?: Date;
    longTermPricingId?: string;
    longTermPricingStartDate?: Date;
    longTermPricingStatus?: string;
    longTermPricingType?: LongTermPricingTypeEnum;
    replacementJob?: string;
    snowballType?: SnowballTypeEnum;
}
