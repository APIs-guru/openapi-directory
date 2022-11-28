import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInAppMessagesPathParams extends SpeakeasyBase {
    applicationId: string;
    endpointId: string;
}
export declare class GetInAppMessagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInAppMessagesRequest extends SpeakeasyBase {
    pathParams: GetInAppMessagesPathParams;
    headers: GetInAppMessagesHeaders;
}
export declare class GetInAppMessagesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getInAppMessagesResponse?: shared.GetInAppMessagesResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
