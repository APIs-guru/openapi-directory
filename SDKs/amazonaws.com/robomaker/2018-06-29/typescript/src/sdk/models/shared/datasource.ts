import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3KeyOutput } from "./s3keyoutput";


// DataSource
/** 
 * Information about a data source.
**/
export class DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3Keys", elemType: shared.S3KeyOutput })
  s3Keys?: S3KeyOutput[];
}
