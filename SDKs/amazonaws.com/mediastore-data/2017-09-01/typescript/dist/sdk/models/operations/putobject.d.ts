import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutObjectPathParams extends SpeakeasyBase {
    path: string;
}
export declare enum PutObjectXAmzStorageClassEnum {
    Temporal = "TEMPORAL"
}
export declare enum PutObjectXAmzUploadAvailabilityEnum {
    Standard = "STANDARD",
    Streaming = "STREAMING"
}
export declare class PutObjectHeaders extends SpeakeasyBase {
    cacheControl?: string;
    contentType?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzStorageClass?: PutObjectXAmzStorageClassEnum;
    xAmzUploadAvailability?: PutObjectXAmzUploadAvailabilityEnum;
}
export declare class PutObjectRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PutObjectRequest extends SpeakeasyBase {
    pathParams: PutObjectPathParams;
    headers: PutObjectHeaders;
    request: PutObjectRequestBody;
}
export declare class PutObjectResponse extends SpeakeasyBase {
    containerNotFoundException?: any;
    contentType: string;
    internalServerError?: any;
    putObjectResponse?: shared.PutObjectResponse;
    statusCode: number;
}
