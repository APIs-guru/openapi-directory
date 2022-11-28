import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProjectQueryParams extends SpeakeasyBase {
    name?: string;
    region?: string;
    snapshotId?: string;
}
export declare class CreateProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateProjectRequestBody extends SpeakeasyBase {
    contents?: string;
}
export declare class CreateProjectRequest extends SpeakeasyBase {
    queryParams: CreateProjectQueryParams;
    headers: CreateProjectHeaders;
    request: CreateProjectRequestBody;
}
export declare class CreateProjectResponse extends SpeakeasyBase {
    badRequestException?: shared.BadRequestException;
    contentType: string;
    createProjectResult?: shared.CreateProjectResult;
    internalFailureException?: shared.InternalFailureException;
    limitExceededException?: shared.LimitExceededException;
    notFoundException?: shared.NotFoundException;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
}
