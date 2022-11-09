import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListSizeConstraintSetsXAmzTargetEnum {
    AwswafRegional20161128ListSizeConstraintSets = "AWSWAF_Regional_20161128.ListSizeConstraintSets"
}
export declare class ListSizeConstraintSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSizeConstraintSetsXAmzTargetEnum;
}
export declare class ListSizeConstraintSetsRequest extends SpeakeasyBase {
    headers: ListSizeConstraintSetsHeaders;
    request: shared.ListSizeConstraintSetsRequest;
}
export declare class ListSizeConstraintSetsResponse extends SpeakeasyBase {
    contentType: string;
    listSizeConstraintSetsResponse?: shared.ListSizeConstraintSetsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
