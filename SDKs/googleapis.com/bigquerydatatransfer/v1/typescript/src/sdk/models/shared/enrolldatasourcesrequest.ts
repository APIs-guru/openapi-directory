import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnrollDataSourcesRequest
/** 
 * A request to enroll a set of data sources so they are visible in the BigQuery UI's `Transfer` tab.
**/
export class EnrollDataSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceIds" })
  dataSourceIds?: string[];
}
