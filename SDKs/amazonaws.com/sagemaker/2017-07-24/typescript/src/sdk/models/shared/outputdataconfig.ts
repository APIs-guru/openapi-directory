import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputDataConfig
/** 
 * Provides information about how to store model training results (model artifacts).
**/
export class OutputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;
}
