import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoMlOutputDataConfig
/** 
 * The output data configuration.
**/
export class AutoMlOutputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
