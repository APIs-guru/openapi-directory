import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IngestionS3InputConfiguration
/** 
 *  Specifies S3 configuration information for the input data for the data ingestion job. 
**/
export class IngestionS3InputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=Prefix" })
  prefix?: string;
}
