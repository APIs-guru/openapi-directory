import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRegexPatternSetsXAmzTargetEnum {
    AwswafRegional20161128ListRegexPatternSets = "AWSWAF_Regional_20161128.ListRegexPatternSets"
}
export declare class ListRegexPatternSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRegexPatternSetsXAmzTargetEnum;
}
export declare class ListRegexPatternSetsRequest extends SpeakeasyBase {
    headers: ListRegexPatternSetsHeaders;
    request: shared.ListRegexPatternSetsRequest;
}
export declare class ListRegexPatternSetsResponse extends SpeakeasyBase {
    contentType: string;
    listRegexPatternSetsResponse?: shared.ListRegexPatternSetsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
