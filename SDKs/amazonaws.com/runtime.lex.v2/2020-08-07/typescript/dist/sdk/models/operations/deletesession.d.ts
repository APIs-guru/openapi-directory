import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSessionPathParams extends SpeakeasyBase {
    botAliasId: string;
    botId: string;
    localeId: string;
    sessionId: string;
}
export declare class DeleteSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSessionRequest extends SpeakeasyBase {
    pathParams: DeleteSessionPathParams;
    headers: DeleteSessionHeaders;
}
export declare class DeleteSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteSessionResponse?: shared.DeleteSessionResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
