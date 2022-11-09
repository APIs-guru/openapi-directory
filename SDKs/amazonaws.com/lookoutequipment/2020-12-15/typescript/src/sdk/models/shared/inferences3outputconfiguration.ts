import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InferenceS3OutputConfiguration
/** 
 *  Specifies configuration information for the output results from the inference, including output S3 location. 
**/
export class InferenceS3OutputConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket: string;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;
}
