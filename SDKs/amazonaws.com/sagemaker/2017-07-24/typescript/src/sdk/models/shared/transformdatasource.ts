import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransformS3DataSource } from "./transforms3datasource";


// TransformDataSource
/** 
 * Describes the location of the channel data.
**/
export class TransformDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3DataSource" })
  s3DataSource: TransformS3DataSource;
}
