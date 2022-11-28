import { SpeakeasyBase } from "../../../internal/utils";
import { ScreenviewData } from "./screenviewdata";
import { CustomDimension } from "./customdimension";
import { EcommerceData } from "./ecommercedata";
import { EventData } from "./eventdata";
import { GoalSetData } from "./goalsetdata";
import { PageviewData } from "./pageviewdata";
export declare enum ActivityActivityTypeEnum {
    ActivityTypeUnspecified = "ACTIVITY_TYPE_UNSPECIFIED",
    Pageview = "PAGEVIEW",
    Screenview = "SCREENVIEW",
    Goal = "GOAL",
    Ecommerce = "ECOMMERCE",
    Event = "EVENT"
}
/**
 * An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
**/
export declare class Activity extends SpeakeasyBase {
    activityTime?: string;
    activityType?: ActivityActivityTypeEnum;
    appview?: ScreenviewData;
    campaign?: string;
    channelGrouping?: string;
    customDimension?: CustomDimension[];
    ecommerce?: EcommerceData;
    event?: EventData;
    goals?: GoalSetData;
    hostname?: string;
    keyword?: string;
    landingPagePath?: string;
    medium?: string;
    pageview?: PageviewData;
    source?: string;
}
