import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1RevenueShareRange
/** 
 * API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.
**/
export class GoogleCloudApigeeV1RevenueShareRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=sharePercentage" })
  sharePercentage?: number;

  @Metadata({ data: "json, name=start" })
  start?: string;
}
