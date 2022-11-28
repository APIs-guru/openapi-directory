import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class ExportProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExportProjectRequest extends SpeakeasyBase {
    pathParams: ExportProjectPathParams;
    headers: ExportProjectHeaders;
}
export declare class ExportProjectResponse extends SpeakeasyBase {
    badRequestException?: shared.BadRequestException;
    contentType: string;
    exportProjectResult?: shared.ExportProjectResult;
    internalFailureException?: shared.InternalFailureException;
    notFoundException?: shared.NotFoundException;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
}
