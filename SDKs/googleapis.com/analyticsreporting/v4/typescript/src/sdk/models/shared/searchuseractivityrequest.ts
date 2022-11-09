import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";
import { User } from "./user";

export enum SearchUserActivityRequestActivityTypesEnum {
    ActivityTypeUnspecified = "ACTIVITY_TYPE_UNSPECIFIED"
,    Pageview = "PAGEVIEW"
,    Screenview = "SCREENVIEW"
,    Goal = "GOAL"
,    Ecommerce = "ECOMMERCE"
,    Event = "EVENT"
}


// SearchUserActivityRequest
/** 
 * The request to fetch User Report from Reporting API `userActivity:get` call.
**/
export class SearchUserActivityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityTypes" })
  activityTypes?: SearchUserActivityRequestActivityTypesEnum[];

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=user" })
  user?: User;

  @Metadata({ data: "json, name=viewId" })
  viewId?: string;
}
