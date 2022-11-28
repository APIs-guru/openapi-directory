import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSessionPathParams extends SpeakeasyBase {
    botAliasId: string;
    botId: string;
    localeId: string;
    sessionId: string;
}
export declare class GetSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSessionRequest extends SpeakeasyBase {
    pathParams: GetSessionPathParams;
    headers: GetSessionHeaders;
}
export declare class GetSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getSessionResponse?: shared.GetSessionResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
