import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelsS3InputConfiguration
/** 
 * The location information (prefix and bucket name) for the s3 location being used for label data. 
**/
export class LabelsS3InputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;
}
