import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudApigeeV1RateRange
/** 
 * API call volume range and the fees charged when the total number of API calls is within the range.
**/
export class GoogleCloudApigeeV1RateRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=fee" })
  fee?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
