import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LensUpgradeSummary } from "./lensupgradesummary";
import { NotificationTypeEnum } from "./notificationtypeenum";


// NotificationSummary
/** 
 * A notification summary return object.
**/
export class NotificationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensUpgradeSummary" })
  lensUpgradeSummary?: LensUpgradeSummary;

  @Metadata({ data: "json, name=Type" })
  type?: NotificationTypeEnum;
}
