import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeleteProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    pathParams: DeleteProjectPathParams;
    headers: DeleteProjectHeaders;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    deleteProjectResult?: shared.DeleteProjectResult;
    internalFailureException?: shared.InternalFailureException;
    notFoundException?: shared.NotFoundException;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
}
