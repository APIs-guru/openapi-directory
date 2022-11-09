import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1RatePlan } from "./googlecloudapigeev1rateplan";


// GoogleCloudApigeeV1ListRatePlansResponse
/** 
 * Response for ListRatePlans.
**/
export class GoogleCloudApigeeV1ListRatePlansResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextStartKey" })
  nextStartKey?: string;

  @Metadata({ data: "json, name=ratePlans", elemType: shared.GoogleCloudApigeeV1RatePlan })
  ratePlans?: GoogleCloudApigeeV1RatePlan[];
}
