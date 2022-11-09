import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceInputNameConfiguration } from "./inferenceinputnameconfiguration";
import { InferenceS3InputConfiguration } from "./inferences3inputconfiguration";


// InferenceInputConfiguration
/** 
 * Specifies configuration information for the input data for the inference, including S3 location of input data.. 
**/
export class InferenceInputConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceInputNameConfiguration" })
  inferenceInputNameConfiguration?: InferenceInputNameConfiguration;

  @Metadata({ data: "json, name=InputTimeZoneOffset" })
  inputTimeZoneOffset?: string;

  @Metadata({ data: "json, name=S3InputConfiguration" })
  s3InputConfiguration?: InferenceS3InputConfiguration;
}
