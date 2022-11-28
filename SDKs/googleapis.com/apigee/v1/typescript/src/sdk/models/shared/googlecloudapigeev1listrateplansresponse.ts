import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1RatePlan } from "./googlecloudapigeev1rateplan";



// GoogleCloudApigeeV1ListRatePlansResponse
/** 
 * Response for ListRatePlans.
**/
export class GoogleCloudApigeeV1ListRatePlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextStartKey" })
  nextStartKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ratePlans", elemType: GoogleCloudApigeeV1RatePlan })
  ratePlans?: GoogleCloudApigeeV1RatePlan[];
}
