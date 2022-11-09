import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceS3OutputConfiguration } from "./inferences3outputconfiguration";
/**
 *  Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location.
**/
export declare class InferenceOutputConfiguration extends SpeakeasyBase {
    kmsKeyId?: string;
    s3OutputConfiguration: InferenceS3OutputConfiguration;
}
