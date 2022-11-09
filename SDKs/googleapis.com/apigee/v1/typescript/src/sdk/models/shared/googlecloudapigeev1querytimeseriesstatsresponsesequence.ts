import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence
/** 
 * A sequence of time series.
**/
export class GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Map<string, string>;

  @Metadata({ data: "json, name=points" })
  points?: any[][];
}
