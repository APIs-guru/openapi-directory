import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DataCollector } from "./googlecloudapigeev1datacollector";
/**
 * Response for ListDataCollectors.
**/
export declare class GoogleCloudApigeeV1ListDataCollectorsResponse extends SpeakeasyBase {
    dataCollectors?: GoogleCloudApigeeV1DataCollector[];
    nextPageToken?: string;
}
