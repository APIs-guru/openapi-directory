import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAppPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAppRequest extends SpeakeasyBase {
    pathParams: DeleteAppPathParams;
    headers: DeleteAppHeaders;
}
export declare class DeleteAppResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteAppResponse?: shared.DeleteAppResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
