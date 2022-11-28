import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InferenceS3InputConfiguration
/** 
 *  Specifies configuration information for the input data for the inference, including input data S3 location. 
**/
export class InferenceS3InputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;
}
