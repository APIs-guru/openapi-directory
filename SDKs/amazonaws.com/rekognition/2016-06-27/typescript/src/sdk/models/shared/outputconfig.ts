import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputConfig
/** 
 * The S3 bucket and folder location where training output is placed.
**/
export class OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;
}
