import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    AwswafRegional20161128TagResource = "AWSWAF_Regional_20161128.TagResource"
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
    statusCode: number;
    tagResourceResponse?: Map<string, any>;
    wafBadRequestException?: any;
    wafInternalErrorException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentItemException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
