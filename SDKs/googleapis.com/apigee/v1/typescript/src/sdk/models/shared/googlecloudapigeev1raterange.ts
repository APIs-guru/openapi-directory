import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeMoney } from "./googletypemoney";


// GoogleCloudApigeeV1RateRange
/** 
 * API call volume range and the fees charged when the total number of API calls is within the range.
**/
export class GoogleCloudApigeeV1RateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=fee" })
  fee?: GoogleTypeMoney;

  @Metadata({ data: "json, name=start" })
  start?: string;
}
