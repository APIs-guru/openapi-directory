import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImportJobPathParams extends SpeakeasyBase {
    applicationId: string;
    jobId: string;
}
export declare class GetImportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImportJobRequest extends SpeakeasyBase {
    pathParams: GetImportJobPathParams;
    headers: GetImportJobHeaders;
}
export declare class GetImportJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getImportJobResponse?: shared.GetImportJobResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
