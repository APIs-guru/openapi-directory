import { SpeakeasyBase } from "../../../internal/utils";
import { LongTermPricingTypeEnum } from "./longtermpricingtypeenum";
import { SnowballTypeEnum } from "./snowballtypeenum";
export declare class CreateLongTermPricingRequest extends SpeakeasyBase {
    isLongTermPricingAutoRenew?: boolean;
    longTermPricingType: LongTermPricingTypeEnum;
    snowballType?: SnowballTypeEnum;
}
