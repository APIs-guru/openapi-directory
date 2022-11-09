import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InferenceS3InputConfiguration
/** 
 *  Specifies configuration information for the input data for the inference, including input data S3 location. 
**/
export class InferenceS3InputConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket: string;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;
}
