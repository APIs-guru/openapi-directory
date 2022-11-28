import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PrepaidBasePlanTypeTimeExtensionEnum {
    TimeExtensionUnspecified = "TIME_EXTENSION_UNSPECIFIED",
    TimeExtensionActive = "TIME_EXTENSION_ACTIVE",
    TimeExtensionInactive = "TIME_EXTENSION_INACTIVE"
}


// PrepaidBasePlanType
/** 
 * Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
**/
export class PrepaidBasePlanType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPeriodDuration" })
  billingPeriodDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=timeExtension" })
  timeExtension?: PrepaidBasePlanTypeTimeExtensionEnum;
}
