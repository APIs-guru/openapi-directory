import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutEmailIdentityMailFromAttributesPathParams extends SpeakeasyBase {
    emailIdentity: string;
}
export declare class PutEmailIdentityMailFromAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum {
    UseDefaultValue = "USE_DEFAULT_VALUE",
    RejectMessage = "REJECT_MESSAGE"
}
export declare class PutEmailIdentityMailFromAttributesRequestBody extends SpeakeasyBase {
    behaviorOnMxFailure?: PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum;
    mailFromDomain?: string;
}
export declare class PutEmailIdentityMailFromAttributesRequest extends SpeakeasyBase {
    pathParams: PutEmailIdentityMailFromAttributesPathParams;
    headers: PutEmailIdentityMailFromAttributesHeaders;
    request: PutEmailIdentityMailFromAttributesRequestBody;
}
export declare class PutEmailIdentityMailFromAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putEmailIdentityMailFromAttributesResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
