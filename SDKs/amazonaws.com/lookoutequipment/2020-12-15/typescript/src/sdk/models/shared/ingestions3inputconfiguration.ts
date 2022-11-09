import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IngestionS3InputConfiguration
/** 
 *  Specifies S3 configuration information for the input data for the data ingestion job. 
**/
export class IngestionS3InputConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket: string;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;
}
