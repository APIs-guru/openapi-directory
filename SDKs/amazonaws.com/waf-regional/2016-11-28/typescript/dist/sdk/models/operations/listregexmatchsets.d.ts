import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRegexMatchSetsXAmzTargetEnum {
    AwswafRegional20161128ListRegexMatchSets = "AWSWAF_Regional_20161128.ListRegexMatchSets"
}
export declare class ListRegexMatchSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRegexMatchSetsXAmzTargetEnum;
}
export declare class ListRegexMatchSetsRequest extends SpeakeasyBase {
    headers: ListRegexMatchSetsHeaders;
    request: shared.ListRegexMatchSetsRequest;
}
export declare class ListRegexMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    listRegexMatchSetsResponse?: shared.ListRegexMatchSetsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
