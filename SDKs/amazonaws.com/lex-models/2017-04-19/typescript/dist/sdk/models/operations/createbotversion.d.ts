import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBotVersionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateBotVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBotVersionRequestBody extends SpeakeasyBase {
    checksum?: string;
}
export declare class CreateBotVersionRequest extends SpeakeasyBase {
    pathParams: CreateBotVersionPathParams;
    headers: CreateBotVersionHeaders;
    request: CreateBotVersionRequestBody;
}
export declare class CreateBotVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createBotVersionResponse?: shared.CreateBotVersionResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    preconditionFailedException?: any;
    statusCode: number;
}
