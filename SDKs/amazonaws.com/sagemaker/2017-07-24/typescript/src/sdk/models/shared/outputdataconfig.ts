import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputDataConfig
/** 
 * Provides information about how to store model training results (model artifacts).
**/
export class OutputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
