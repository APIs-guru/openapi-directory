import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence } from "./googlecloudapigeev1querytimeseriesstatsresponsesequence";
/**
 * Represents security stats result as a collection of time series sequences.
**/
export declare class GoogleCloudApigeeV1QueryTimeSeriesStatsResponse extends SpeakeasyBase {
    columns?: string[];
    nextPageToken?: string;
    values?: GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence[];
}
