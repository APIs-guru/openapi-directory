import { SpeakeasyBase } from "../../../internal/utils";
import { S3Destination } from "./s3destination";
/**
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
**/
export declare class ClassificationExportConfiguration extends SpeakeasyBase {
    s3Destination?: S3Destination;
}
