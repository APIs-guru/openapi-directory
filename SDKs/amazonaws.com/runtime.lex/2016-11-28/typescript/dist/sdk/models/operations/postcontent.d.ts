import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostContentPathParams extends SpeakeasyBase {
    botAlias: string;
    botName: string;
    userId: string;
}
export declare class PostContentHeaders extends SpeakeasyBase {
    accept?: string;
    contentType: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzLexActiveContexts?: string;
    xAmzLexRequestAttributes?: string;
    xAmzLexSessionAttributes?: string;
}
export declare class PostContentRequestBody extends SpeakeasyBase {
    inputStream: string;
}
export declare class PostContentRequest extends SpeakeasyBase {
    pathParams: PostContentPathParams;
    headers: PostContentHeaders;
    request: PostContentRequestBody;
}
export declare class PostContentResponse extends SpeakeasyBase {
    badGatewayException?: any;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    dependencyFailedException?: any;
    internalFailureException?: any;
    limitExceededException?: any;
    loopDetectedException?: any;
    notAcceptableException?: any;
    notFoundException?: any;
    postContentResponse?: shared.PostContentResponse;
    requestTimeoutException?: any;
    statusCode: number;
    unsupportedMediaTypeException?: any;
}
