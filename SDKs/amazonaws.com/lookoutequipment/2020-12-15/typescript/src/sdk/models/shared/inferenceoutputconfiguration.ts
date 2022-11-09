import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceS3OutputConfiguration } from "./inferences3outputconfiguration";


// InferenceOutputConfiguration
/** 
 *  Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location. 
**/
export class InferenceOutputConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3OutputConfiguration" })
  s3OutputConfiguration: InferenceS3OutputConfiguration;
}
