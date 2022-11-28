import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about an Amazon S3 object.
**/
export declare class AwsS3ObjectDetails extends SpeakeasyBase {
    contentType?: string;
    eTag?: string;
    lastModified?: string;
    ssekmsKeyId?: string;
    serverSideEncryption?: string;
    versionId?: string;
}
