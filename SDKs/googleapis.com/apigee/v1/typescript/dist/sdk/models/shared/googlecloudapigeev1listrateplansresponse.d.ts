import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1RatePlan } from "./googlecloudapigeev1rateplan";
/**
 * Response for ListRatePlans.
**/
export declare class GoogleCloudApigeeV1ListRatePlansResponse extends SpeakeasyBase {
    nextStartKey?: string;
    ratePlans?: GoogleCloudApigeeV1RatePlan[];
}
