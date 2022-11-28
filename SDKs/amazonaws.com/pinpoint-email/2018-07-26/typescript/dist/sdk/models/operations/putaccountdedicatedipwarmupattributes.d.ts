import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutAccountDedicatedIpWarmupAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutAccountDedicatedIpWarmupAttributesRequestBody extends SpeakeasyBase {
    autoWarmupEnabled?: boolean;
}
export declare class PutAccountDedicatedIpWarmupAttributesRequest extends SpeakeasyBase {
    headers: PutAccountDedicatedIpWarmupAttributesHeaders;
    request: PutAccountDedicatedIpWarmupAttributesRequestBody;
}
export declare class PutAccountDedicatedIpWarmupAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    putAccountDedicatedIpWarmupAttributesResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
