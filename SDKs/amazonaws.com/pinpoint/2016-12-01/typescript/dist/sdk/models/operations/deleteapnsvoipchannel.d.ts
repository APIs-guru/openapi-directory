import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApnsVoipChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteApnsVoipChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApnsVoipChannelRequest extends SpeakeasyBase {
    pathParams: DeleteApnsVoipChannelPathParams;
    headers: DeleteApnsVoipChannelHeaders;
}
export declare class DeleteApnsVoipChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteApnsVoipChannelResponse?: shared.DeleteApnsVoipChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
