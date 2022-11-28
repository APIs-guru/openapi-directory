import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionS3InputConfiguration } from "./ingestions3inputconfiguration";



// IngestionInputConfiguration
/** 
 *  Specifies configuration information for the input data for the data ingestion job, including input data S3 location. 
**/
export class IngestionInputConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3InputConfiguration" })
  s3InputConfiguration: IngestionS3InputConfiguration;
}
