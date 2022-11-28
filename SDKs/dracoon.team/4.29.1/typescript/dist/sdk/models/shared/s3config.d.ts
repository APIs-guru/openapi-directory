import { SpeakeasyBase } from "../../../internal/utils";
/**
 * S3 configuration
**/
export declare class S3Config extends SpeakeasyBase {
    accessKeyDefined: boolean;
    bucketName?: string;
    bucketUrl: string;
    endpointUrl?: string;
    region?: string;
    secretKeyDefined: boolean;
}
