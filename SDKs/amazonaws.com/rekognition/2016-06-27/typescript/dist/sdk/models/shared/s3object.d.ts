import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Provides the S3 bucket name and object name.</p> <p>The region for the S3 bucket containing the S3 object must match the region you use for Amazon Rekognition operations.</p> <p>For Amazon Rekognition to process an S3 object, the user must have permission to access the S3 object. For more information, see Resource-Based Policies in the Amazon Rekognition Developer Guide. </p>
**/
export declare class S3Object extends SpeakeasyBase {
    bucket?: string;
    name?: string;
    version?: string;
}
