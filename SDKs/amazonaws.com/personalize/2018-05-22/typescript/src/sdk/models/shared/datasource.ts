import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataSource
/** 
 * Describes the data source that contains the data to upload to a dataset.
**/
export class DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataLocation" })
  dataLocation?: string;
}
