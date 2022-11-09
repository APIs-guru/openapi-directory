import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoMlOutputDataConfig
/** 
 * The output data configuration.
**/
export class AutoMlOutputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
