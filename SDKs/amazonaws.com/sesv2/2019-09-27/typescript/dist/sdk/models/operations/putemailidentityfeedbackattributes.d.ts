import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutEmailIdentityFeedbackAttributesPathParams extends SpeakeasyBase {
    emailIdentity: string;
}
export declare class PutEmailIdentityFeedbackAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutEmailIdentityFeedbackAttributesRequestBody extends SpeakeasyBase {
    emailForwardingEnabled?: boolean;
}
export declare class PutEmailIdentityFeedbackAttributesRequest extends SpeakeasyBase {
    pathParams: PutEmailIdentityFeedbackAttributesPathParams;
    headers: PutEmailIdentityFeedbackAttributesHeaders;
    request: PutEmailIdentityFeedbackAttributesRequestBody;
}
export declare class PutEmailIdentityFeedbackAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putEmailIdentityFeedbackAttributesResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
