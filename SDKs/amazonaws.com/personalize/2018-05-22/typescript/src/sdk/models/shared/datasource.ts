import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataSource
/** 
 * Describes the data source that contains the data to upload to a dataset.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataLocation" })
  dataLocation?: string;
}
