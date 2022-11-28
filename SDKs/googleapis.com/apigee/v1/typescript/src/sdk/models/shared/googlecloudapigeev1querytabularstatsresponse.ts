import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudApigeeV1QueryTabularStatsResponse
/** 
 * Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values.
**/
export class GoogleCloudApigeeV1QueryTabularStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[][];
}
