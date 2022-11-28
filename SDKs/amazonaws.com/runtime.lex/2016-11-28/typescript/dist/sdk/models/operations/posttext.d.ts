import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTextPathParams extends SpeakeasyBase {
    botAlias: string;
    botName: string;
    userId: string;
}
export declare class PostTextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTextRequestBody extends SpeakeasyBase {
    activeContexts?: shared.ActiveContext[];
    inputText: string;
    requestAttributes?: Map<string, string>;
    sessionAttributes?: Map<string, string>;
}
export declare class PostTextRequest extends SpeakeasyBase {
    pathParams: PostTextPathParams;
    headers: PostTextHeaders;
    request: PostTextRequestBody;
}
export declare class PostTextResponse extends SpeakeasyBase {
    badGatewayException?: any;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    dependencyFailedException?: any;
    internalFailureException?: any;
    limitExceededException?: any;
    loopDetectedException?: any;
    notFoundException?: any;
    postTextResponse?: shared.PostTextResponse;
    statusCode: number;
}
