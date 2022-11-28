import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the display name of an application and the tags to associate with the application.
**/
export declare class CreateAppRequestBodyCreateApplicationRequest extends SpeakeasyBase {
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateAppRequestBody extends SpeakeasyBase {
    createApplicationRequest: CreateAppRequestBodyCreateApplicationRequest;
}
export declare class CreateAppRequest extends SpeakeasyBase {
    headers: CreateAppHeaders;
    request: CreateAppRequestBody;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createAppResponse?: shared.CreateAppResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
