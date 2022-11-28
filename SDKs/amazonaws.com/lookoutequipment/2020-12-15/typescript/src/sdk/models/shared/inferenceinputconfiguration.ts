import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceInputNameConfiguration } from "./inferenceinputnameconfiguration";
import { InferenceS3InputConfiguration } from "./inferences3inputconfiguration";



// InferenceInputConfiguration
/** 
 * Specifies configuration information for the input data for the inference, including S3 location of input data.. 
**/
export class InferenceInputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceInputNameConfiguration" })
  inferenceInputNameConfiguration?: InferenceInputNameConfiguration;

  @SpeakeasyMetadata({ data: "json, name=InputTimeZoneOffset" })
  inputTimeZoneOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=S3InputConfiguration" })
  s3InputConfiguration?: InferenceS3InputConfiguration;
}
