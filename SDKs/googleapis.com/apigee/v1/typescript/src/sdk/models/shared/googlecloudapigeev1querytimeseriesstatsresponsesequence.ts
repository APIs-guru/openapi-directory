import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence
/** 
 * A sequence of time series.
**/
export class GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: any[][];
}
