import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataSourceConfig
/** 
 * Information about a data source.
**/
export class DataSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket: string;

  @SpeakeasyMetadata({ data: "json, name=s3Keys" })
  s3Keys: string[];
}
