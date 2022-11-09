import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListSqlInjectionMatchSetsXAmzTargetEnum {
    Awswaf20150824ListSqlInjectionMatchSets = "AWSWAF_20150824.ListSqlInjectionMatchSets"
}
export declare class ListSqlInjectionMatchSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSqlInjectionMatchSetsXAmzTargetEnum;
}
export declare class ListSqlInjectionMatchSetsRequest extends SpeakeasyBase {
    headers: ListSqlInjectionMatchSetsHeaders;
    request: shared.ListSqlInjectionMatchSetsRequest;
}
export declare class ListSqlInjectionMatchSetsResponse extends SpeakeasyBase {
    contentType: string;
    listSqlInjectionMatchSetsResponse?: shared.ListSqlInjectionMatchSetsResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
}
