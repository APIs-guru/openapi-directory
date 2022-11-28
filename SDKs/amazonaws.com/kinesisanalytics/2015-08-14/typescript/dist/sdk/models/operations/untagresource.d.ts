import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    KinesisAnalytics20150814UntagResource = "KinesisAnalytics_20150814.UntagResource"
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
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyTagsException?: any;
    untagResourceResponse?: Map<string, any>;
}
