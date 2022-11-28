import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateUploadUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateUploadUrlRequest extends SpeakeasyBase {
    headers: CreateUploadUrlHeaders;
}
export declare class CreateUploadUrlResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createUploadUrlResponse?: shared.CreateUploadUrlResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
