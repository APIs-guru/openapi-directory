import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1RevenueShareRange
/** 
 * API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.
**/
export class GoogleCloudApigeeV1RevenueShareRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=sharePercentage" })
  sharePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
