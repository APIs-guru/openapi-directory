import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListTagsForResourceXAmzTargetEnum {
    Awswaf20150824ListTagsForResource = "AWSWAF_20150824.ListTagsForResource"
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceRequest;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    statusCode: number;
    wafBadRequestException?: any;
    wafInternalErrorException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
