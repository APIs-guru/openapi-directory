import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateIntentVersionPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateIntentVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateIntentVersionRequestBody extends SpeakeasyBase {
    checksum?: string;
}
export declare class CreateIntentVersionRequest extends SpeakeasyBase {
    pathParams: CreateIntentVersionPathParams;
    headers: CreateIntentVersionHeaders;
    request: CreateIntentVersionRequestBody;
}
export declare class CreateIntentVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createIntentVersionResponse?: shared.CreateIntentVersionResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    preconditionFailedException?: any;
    statusCode: number;
}
