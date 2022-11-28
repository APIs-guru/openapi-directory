import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputConfig
/** 
 * The S3 bucket and folder location where training output is placed.
**/
export class OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;
}
