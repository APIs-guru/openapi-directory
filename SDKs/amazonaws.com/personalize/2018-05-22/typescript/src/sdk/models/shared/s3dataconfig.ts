import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3DataConfig
/** 
 * The configuration details of an Amazon S3 input or output bucket.
**/
export class S3DataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=path" })
  path: string;
}
