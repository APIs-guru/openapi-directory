import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { User } from "./user";
export declare enum SearchUserActivityRequestActivityTypesEnum {
    ActivityTypeUnspecified = "ACTIVITY_TYPE_UNSPECIFIED",
    Pageview = "PAGEVIEW",
    Screenview = "SCREENVIEW",
    Goal = "GOAL",
    Ecommerce = "ECOMMERCE",
    Event = "EVENT"
}
/**
 * The request to fetch User Report from Reporting API `userActivity:get` call.
**/
export declare class SearchUserActivityRequest extends SpeakeasyBase {
    activityTypes?: SearchUserActivityRequestActivityTypesEnum[];
    dateRange?: DateRange;
    pageSize?: number;
    pageToken?: string;
    user?: User;
    viewId?: string;
}
