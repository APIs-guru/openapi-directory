import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence } from "./googlecloudapigeev1querytimeseriesstatsresponsesequence";



// GoogleCloudApigeeV1QueryTimeSeriesStatsResponse
/** 
 * Represents security stats result as a collection of time series sequences.
**/
export class GoogleCloudApigeeV1QueryTimeSeriesStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence })
  values?: GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence[];
}
