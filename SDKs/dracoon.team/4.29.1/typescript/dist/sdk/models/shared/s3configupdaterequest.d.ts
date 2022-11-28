import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for updating a S3 configuration
**/
export declare class S3ConfigUpdateRequest extends SpeakeasyBase {
    accessKey?: string;
    bucketName?: string;
    bucketUrl?: string;
    endpointUrl?: string;
    region?: string;
    secretKey?: string;
}
