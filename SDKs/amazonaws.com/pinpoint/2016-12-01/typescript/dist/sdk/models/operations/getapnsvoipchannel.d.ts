import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApnsVoipChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetApnsVoipChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApnsVoipChannelRequest extends SpeakeasyBase {
    pathParams: GetApnsVoipChannelPathParams;
    headers: GetApnsVoipChannelHeaders;
}
export declare class GetApnsVoipChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getApnsVoipChannelResponse?: shared.GetApnsVoipChannelResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
