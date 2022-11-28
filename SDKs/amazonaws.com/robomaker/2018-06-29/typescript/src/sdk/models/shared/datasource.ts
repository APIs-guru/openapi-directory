import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3KeyOutput } from "./s3keyoutput";



// DataSource
/** 
 * Information about a data source.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Keys", elemType: S3KeyOutput })
  s3Keys?: S3KeyOutput[];
}
