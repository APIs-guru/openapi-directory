import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScreenviewData } from "./screenviewdata";
import { CustomDimension } from "./customdimension";
import { EcommerceData } from "./ecommercedata";
import { EventData } from "./eventdata";
import { GoalSetData } from "./goalsetdata";
import { PageviewData } from "./pageviewdata";


export enum ActivityActivityTypeEnum {
    ActivityTypeUnspecified = "ACTIVITY_TYPE_UNSPECIFIED",
    Pageview = "PAGEVIEW",
    Screenview = "SCREENVIEW",
    Goal = "GOAL",
    Ecommerce = "ECOMMERCE",
    Event = "EVENT"
}


// Activity
/** 
 * An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
**/
export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityTime" })
  activityTime?: string;

  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType?: ActivityActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=appview" })
  appview?: ScreenviewData;

  @SpeakeasyMetadata({ data: "json, name=campaign" })
  campaign?: string;

  @SpeakeasyMetadata({ data: "json, name=channelGrouping" })
  channelGrouping?: string;

  @SpeakeasyMetadata({ data: "json, name=customDimension", elemType: CustomDimension })
  customDimension?: CustomDimension[];

  @SpeakeasyMetadata({ data: "json, name=ecommerce" })
  ecommerce?: EcommerceData;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: EventData;

  @SpeakeasyMetadata({ data: "json, name=goals" })
  goals?: GoalSetData;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "json, name=landingPagePath" })
  landingPagePath?: string;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: string;

  @SpeakeasyMetadata({ data: "json, name=pageview" })
  pageview?: PageviewData;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
