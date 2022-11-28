import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListXssMatchSetsXAmzTargetEnum {
    AwswafRegional20161128ListXssMatchSets = "AWSWAF_Regional_20161128.ListXssMatchSets"
}
export declare class ListXssMatchSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListXssMatchSetsXAmzTargetEnum;
}
export declare class ListXssMatchSetsRequest extends SpeakeasyBase {
    headers: ListXssMatchSetsHeaders;
    request: shared.ListXssMatchSetsRequest;
}
export declare class ListXssMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    listXssMatchSetsResponse?: shared.ListXssMatchSetsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
