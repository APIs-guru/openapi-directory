import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3DataConfig
/** 
 * The configuration details of an Amazon S3 input or output bucket.
**/
export class S3DataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}
