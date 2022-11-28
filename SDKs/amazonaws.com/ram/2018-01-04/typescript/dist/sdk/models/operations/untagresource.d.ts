import { SpeakeasyBase } from "../../../internal/utils";
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResourceRequestBody extends SpeakeasyBase {
    resourceShareArn: string;
    tagKeys: string[];
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: UntagResourceRequestBody;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    untagResourceResponse?: Map<string, any>;
}
