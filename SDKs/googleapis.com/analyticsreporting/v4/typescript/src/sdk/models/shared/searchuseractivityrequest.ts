import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { User } from "./user";


export enum SearchUserActivityRequestActivityTypesEnum {
    ActivityTypeUnspecified = "ACTIVITY_TYPE_UNSPECIFIED",
    Pageview = "PAGEVIEW",
    Screenview = "SCREENVIEW",
    Goal = "GOAL",
    Ecommerce = "ECOMMERCE",
    Event = "EVENT"
}


// SearchUserActivityRequest
/** 
 * The request to fetch User Report from Reporting API `userActivity:get` call.
**/
export class SearchUserActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityTypes" })
  activityTypes?: SearchUserActivityRequestActivityTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;

  @SpeakeasyMetadata({ data: "json, name=viewId" })
  viewId?: string;
}
