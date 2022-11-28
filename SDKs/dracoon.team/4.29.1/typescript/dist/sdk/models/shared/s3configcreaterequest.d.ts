import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating a S3 configuration
**/
export declare class S3ConfigCreateRequest extends SpeakeasyBase {
    accessKey: string;
    bucketName?: string;
    bucketUrl?: string;
    endpointUrl?: string;
    region?: string;
    secretKey: string;
}
