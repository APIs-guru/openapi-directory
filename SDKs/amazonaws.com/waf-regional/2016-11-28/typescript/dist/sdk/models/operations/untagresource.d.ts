import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    AwswafRegional20161128UntagResource = "AWSWAF_Regional_20161128.UntagResource"
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
    statusCode: number;
    untagResourceResponse?: Map<string, any>;
    wafBadRequestException?: any;
    wafInternalErrorException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
