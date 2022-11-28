import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAccessDateRange
/** 
 * A contiguous range of days: startDate, startDate + 1, ..., endDate.
**/
export class GoogleAnalyticsAdminV1alphaAccessDateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
