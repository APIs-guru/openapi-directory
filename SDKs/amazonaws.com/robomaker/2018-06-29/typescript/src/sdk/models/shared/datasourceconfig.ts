import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataSourceConfig
/** 
 * Information about a data source.
**/
export class DataSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket: string;

  @Metadata({ data: "json, name=s3Keys" })
  s3Keys: string[];
}
