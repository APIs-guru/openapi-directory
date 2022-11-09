import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScreenviewData } from "./screenviewdata";
import { CustomDimension } from "./customdimension";
import { EcommerceData } from "./ecommercedata";
import { EventData } from "./eventdata";
import { GoalSetData } from "./goalsetdata";
import { PageviewData } from "./pageviewdata";

export enum ActivityActivityTypeEnum {
    ActivityTypeUnspecified = "ACTIVITY_TYPE_UNSPECIFIED"
,    Pageview = "PAGEVIEW"
,    Screenview = "SCREENVIEW"
,    Goal = "GOAL"
,    Ecommerce = "ECOMMERCE"
,    Event = "EVENT"
}


// Activity
/** 
 * An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
**/
export class Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityTime" })
  activityTime?: string;

  @Metadata({ data: "json, name=activityType" })
  activityType?: ActivityActivityTypeEnum;

  @Metadata({ data: "json, name=appview" })
  appview?: ScreenviewData;

  @Metadata({ data: "json, name=campaign" })
  campaign?: string;

  @Metadata({ data: "json, name=channelGrouping" })
  channelGrouping?: string;

  @Metadata({ data: "json, name=customDimension", elemType: shared.CustomDimension })
  customDimension?: CustomDimension[];

  @Metadata({ data: "json, name=ecommerce" })
  ecommerce?: EcommerceData;

  @Metadata({ data: "json, name=event" })
  event?: EventData;

  @Metadata({ data: "json, name=goals" })
  goals?: GoalSetData;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=keyword" })
  keyword?: string;

  @Metadata({ data: "json, name=landingPagePath" })
  landingPagePath?: string;

  @Metadata({ data: "json, name=medium" })
  medium?: string;

  @Metadata({ data: "json, name=pageview" })
  pageview?: PageviewData;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
