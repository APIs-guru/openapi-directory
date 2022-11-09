import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelsS3InputConfiguration
/** 
 * The location information (prefix and bucket name) for the s3 location being used for label data. 
**/
export class LabelsS3InputConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket: string;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;
}
