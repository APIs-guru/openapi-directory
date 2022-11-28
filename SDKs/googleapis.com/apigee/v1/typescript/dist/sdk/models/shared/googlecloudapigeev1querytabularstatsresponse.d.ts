import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values.
**/
export declare class GoogleCloudApigeeV1QueryTabularStatsResponse extends SpeakeasyBase {
    columns?: string[];
    nextPageToken?: string;
    values?: any[][];
}
