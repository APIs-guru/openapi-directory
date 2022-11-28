import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateImportJobPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
**/
export declare class CreateImportJobRequestBodyImportJobRequest extends SpeakeasyBase {
    defineSegment?: boolean;
    externalId?: string;
    format?: shared.FormatEnum;
    registerEndpoints?: boolean;
    roleArn?: string;
    s3Url?: string;
    segmentId?: string;
    segmentName?: string;
}
export declare class CreateImportJobRequestBody extends SpeakeasyBase {
    importJobRequest: CreateImportJobRequestBodyImportJobRequest;
}
export declare class CreateImportJobRequest extends SpeakeasyBase {
    pathParams: CreateImportJobPathParams;
    headers: CreateImportJobHeaders;
    request: CreateImportJobRequestBody;
}
export declare class CreateImportJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createImportJobResponse?: shared.CreateImportJobResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
