import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence } from "./googlecloudapigeev1querytimeseriesstatsresponsesequence";


// GoogleCloudApigeeV1QueryTimeSeriesStatsResponse
/** 
 * Represents security stats result as a collection of time series sequences.
**/
export class GoogleCloudApigeeV1QueryTimeSeriesStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=values", elemType: shared.GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence })
  values?: GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence[];
}
