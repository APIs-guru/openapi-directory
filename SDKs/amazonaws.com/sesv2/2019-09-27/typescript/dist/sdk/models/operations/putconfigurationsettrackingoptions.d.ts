import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutConfigurationSetTrackingOptionsPathParams extends SpeakeasyBase {
    configurationSetName: string;
}
export declare class PutConfigurationSetTrackingOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationSetTrackingOptionsRequestBody extends SpeakeasyBase {
    customRedirectDomain?: string;
}
export declare class PutConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
    pathParams: PutConfigurationSetTrackingOptionsPathParams;
    headers: PutConfigurationSetTrackingOptionsHeaders;
    request: PutConfigurationSetTrackingOptionsRequestBody;
}
export declare class PutConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putConfigurationSetTrackingOptionsResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
