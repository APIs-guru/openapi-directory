import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutEmailIdentityConfigurationSetAttributesPathParams extends SpeakeasyBase {
    emailIdentity: string;
}
export declare class PutEmailIdentityConfigurationSetAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutEmailIdentityConfigurationSetAttributesRequestBody extends SpeakeasyBase {
    configurationSetName?: string;
}
export declare class PutEmailIdentityConfigurationSetAttributesRequest extends SpeakeasyBase {
    pathParams: PutEmailIdentityConfigurationSetAttributesPathParams;
    headers: PutEmailIdentityConfigurationSetAttributesHeaders;
    request: PutEmailIdentityConfigurationSetAttributesRequestBody;
}
export declare class PutEmailIdentityConfigurationSetAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putEmailIdentityConfigurationSetAttributesResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
