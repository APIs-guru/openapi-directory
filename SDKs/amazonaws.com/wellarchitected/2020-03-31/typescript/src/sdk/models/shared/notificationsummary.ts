import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LensUpgradeSummary } from "./lensupgradesummary";
import { NotificationTypeEnum } from "./notificationtypeenum";



// NotificationSummary
/** 
 * A notification summary return object.
**/
export class NotificationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LensUpgradeSummary" })
  lensUpgradeSummary?: LensUpgradeSummary;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: NotificationTypeEnum;
}
