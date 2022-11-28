import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Instance } from "./googlecloudapigeev1instance";
/**
 * Response for ListInstances.
**/
export declare class GoogleCloudApigeeV1ListInstancesResponse extends SpeakeasyBase {
    instances?: GoogleCloudApigeeV1Instance[];
    nextPageToken?: string;
}
