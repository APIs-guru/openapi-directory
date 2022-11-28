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
    resourceArn: string;
    tagKeyList: string[];
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: UntagResourceRequestBody;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    untagResourceOutput?: Map<string, any>;
}
