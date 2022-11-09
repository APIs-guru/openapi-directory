import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResourceRequestBody extends SpeakeasyBase {
    resourceShareArn: string;
    tags: shared.Tag[];
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: TagResourceRequestBody;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    malformedArnException?: any;
    resourceArnNotFoundException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tagLimitExceededException?: any;
    tagPolicyViolationException?: any;
    tagResourceResponse?: Map<string, any>;
    unknownResourceException?: any;
}
