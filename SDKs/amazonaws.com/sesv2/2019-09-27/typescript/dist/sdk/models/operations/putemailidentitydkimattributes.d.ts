import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutEmailIdentityDkimAttributesPathParams extends SpeakeasyBase {
    emailIdentity: string;
}
export declare class PutEmailIdentityDkimAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutEmailIdentityDkimAttributesRequestBody extends SpeakeasyBase {
    signingEnabled?: boolean;
}
export declare class PutEmailIdentityDkimAttributesRequest extends SpeakeasyBase {
    pathParams: PutEmailIdentityDkimAttributesPathParams;
    headers: PutEmailIdentityDkimAttributesHeaders;
    request: PutEmailIdentityDkimAttributesRequestBody;
}
export declare class PutEmailIdentityDkimAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putEmailIdentityDkimAttributesResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
