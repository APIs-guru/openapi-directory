import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Returns list of supported data sources and their metadata.
**/
export declare class ListDataSourcesResponse extends SpeakeasyBase {
    dataSources?: DataSource[];
    nextPageToken?: string;
}
