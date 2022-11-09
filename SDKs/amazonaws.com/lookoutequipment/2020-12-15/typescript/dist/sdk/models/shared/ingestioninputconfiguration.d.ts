import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionS3InputConfiguration } from "./ingestions3inputconfiguration";
/**
 *  Specifies configuration information for the input data for the data ingestion job, including input data S3 location.
**/
export declare class IngestionInputConfiguration extends SpeakeasyBase {
    s3InputConfiguration: IngestionS3InputConfiguration;
}
