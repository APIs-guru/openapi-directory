import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    Timestream20181101TagResource = "Timestream_20181101.TagResource"
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: shared.TagResourceRequest;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    tagResourceResponse?: Map<string, any>;
    throttlingException?: any;
    validationException?: any;
}
