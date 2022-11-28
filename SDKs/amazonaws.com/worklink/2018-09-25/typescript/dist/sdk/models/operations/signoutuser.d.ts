import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignOutUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SignOutUserRequestBody extends SpeakeasyBase {
    fleetArn: string;
    username: string;
}
export declare class SignOutUserRequest extends SpeakeasyBase {
    headers: SignOutUserHeaders;
    request: SignOutUserRequestBody;
}
export declare class SignOutUserResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    signOutUserResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
