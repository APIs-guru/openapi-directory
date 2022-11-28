import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InferenceS3OutputConfiguration
/** 
 *  Specifies configuration information for the output results from the inference, including output S3 location. 
**/
export class InferenceS3OutputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;
}
