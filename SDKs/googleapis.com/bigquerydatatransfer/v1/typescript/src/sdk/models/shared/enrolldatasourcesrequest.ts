import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnrollDataSourcesRequest
/** 
 * A request to enroll a set of data sources so they are visible in the BigQuery UI's `Transfer` tab.
**/
export class EnrollDataSourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceIds" })
  dataSourceIds?: string[];
}
