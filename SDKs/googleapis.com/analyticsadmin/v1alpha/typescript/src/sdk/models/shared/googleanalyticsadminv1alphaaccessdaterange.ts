import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAccessDateRange
/** 
 * A contiguous range of days: startDate, startDate + 1, ..., endDate.
**/
export class GoogleAnalyticsAdminV1alphaAccessDateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
