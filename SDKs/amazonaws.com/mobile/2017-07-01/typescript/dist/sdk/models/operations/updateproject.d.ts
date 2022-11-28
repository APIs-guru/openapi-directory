import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectQueryParams extends SpeakeasyBase {
    projectId: string;
}
export declare class UpdateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateProjectRequestBody extends SpeakeasyBase {
    contents?: string;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    queryParams: UpdateProjectQueryParams;
    headers: UpdateProjectHeaders;
    request: UpdateProjectRequestBody;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    accountActionRequiredException?: shared.AccountActionRequiredException;
    badRequestException?: shared.BadRequestException;
    contentType: string;
    internalFailureException?: shared.InternalFailureException;
    limitExceededException?: shared.LimitExceededException;
    notFoundException?: shared.NotFoundException;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
    updateProjectResult?: shared.UpdateProjectResult;
}
