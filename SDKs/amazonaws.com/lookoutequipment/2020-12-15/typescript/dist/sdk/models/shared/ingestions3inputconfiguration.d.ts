import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  Specifies S3 configuration information for the input data for the data ingestion job.
**/
export declare class IngestionS3InputConfiguration extends SpeakeasyBase {
    bucket: string;
    prefix?: string;
}
