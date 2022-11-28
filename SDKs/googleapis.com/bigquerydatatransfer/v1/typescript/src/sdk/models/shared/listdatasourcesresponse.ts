import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";



// ListDataSourcesResponse
/** 
 * Returns list of supported data sources and their metadata.
**/
export class ListDataSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSources", elemType: DataSource })
  dataSources?: DataSource[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
