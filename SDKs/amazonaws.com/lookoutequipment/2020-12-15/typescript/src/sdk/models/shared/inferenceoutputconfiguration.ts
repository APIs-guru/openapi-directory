import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceS3OutputConfiguration } from "./inferences3outputconfiguration";



// InferenceOutputConfiguration
/** 
 *  Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location. 
**/
export class InferenceOutputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OutputConfiguration" })
  s3OutputConfiguration: InferenceS3OutputConfiguration;
}
