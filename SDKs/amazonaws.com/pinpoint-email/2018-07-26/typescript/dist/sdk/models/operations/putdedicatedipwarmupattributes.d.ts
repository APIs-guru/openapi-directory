import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutDedicatedIpWarmupAttributesPathParams extends SpeakeasyBase {
    ip: string;
}
export declare class PutDedicatedIpWarmupAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutDedicatedIpWarmupAttributesRequestBody extends SpeakeasyBase {
    warmupPercentage: number;
}
export declare class PutDedicatedIpWarmupAttributesRequest extends SpeakeasyBase {
    pathParams: PutDedicatedIpWarmupAttributesPathParams;
    headers: PutDedicatedIpWarmupAttributesHeaders;
    request: PutDedicatedIpWarmupAttributesRequestBody;
}
export declare class PutDedicatedIpWarmupAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putDedicatedIpWarmupAttributesResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
