import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    Timestream20181101UntagResource = "Timestream_20181101.UntagResource"
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: shared.UntagResourceRequest;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    untagResourceResponse?: Map<string, any>;
    validationException?: any;
}
