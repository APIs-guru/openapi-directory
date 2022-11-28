import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PrepaidBasePlanTypeTimeExtensionEnum {
    TimeExtensionUnspecified = "TIME_EXTENSION_UNSPECIFIED",
    TimeExtensionActive = "TIME_EXTENSION_ACTIVE",
    TimeExtensionInactive = "TIME_EXTENSION_INACTIVE"
}
/**
 * Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
**/
export declare class PrepaidBasePlanType extends SpeakeasyBase {
    billingPeriodDuration?: string;
    timeExtension?: PrepaidBasePlanTypeTimeExtensionEnum;
}
