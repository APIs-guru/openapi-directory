import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExportJobPathParams extends SpeakeasyBase {
    applicationId: string;
    jobId: string;
}
export declare class GetExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExportJobRequest extends SpeakeasyBase {
    pathParams: GetExportJobPathParams;
    headers: GetExportJobHeaders;
}
export declare class GetExportJobResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getExportJobResponse?: shared.GetExportJobResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
