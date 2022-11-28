import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceInputNameConfiguration } from "./inferenceinputnameconfiguration";
import { InferenceS3InputConfiguration } from "./inferences3inputconfiguration";
/**
 * Specifies configuration information for the input data for the inference, including S3 location of input data..
**/
export declare class InferenceInputConfiguration extends SpeakeasyBase {
    inferenceInputNameConfiguration?: InferenceInputNameConfiguration;
    inputTimeZoneOffset?: string;
    s3InputConfiguration?: InferenceS3InputConfiguration;
}
