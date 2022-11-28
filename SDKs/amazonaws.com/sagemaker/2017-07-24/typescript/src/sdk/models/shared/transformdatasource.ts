import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransformS3DataSource } from "./transforms3datasource";



// TransformDataSource
/** 
 * Describes the location of the channel data.
**/
export class TransformDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3DataSource" })
  s3DataSource: TransformS3DataSource;
}
