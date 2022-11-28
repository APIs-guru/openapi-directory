import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateExportJobPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
**/
export declare class CreateExportJobRequestBodyExportJobRequest extends SpeakeasyBase {
    roleArn?: string;
    s3UrlPrefix?: string;
    segmentId?: string;
    segmentVersion?: number;
}
export declare class CreateExportJobRequestBody extends SpeakeasyBase {
    exportJobRequest: CreateExportJobRequestBodyExportJobRequest;
}
export declare class CreateExportJobRequest extends SpeakeasyBase {
    pathParams: CreateExportJobPathParams;
    headers: CreateExportJobHeaders;
    request: CreateExportJobRequestBody;
}
export declare class CreateExportJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createExportJobResponse?: shared.CreateExportJobResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
