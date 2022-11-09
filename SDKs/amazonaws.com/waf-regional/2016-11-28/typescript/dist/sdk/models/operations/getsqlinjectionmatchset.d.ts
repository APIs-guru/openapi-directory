import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetSqlInjectionMatchSetXAmzTargetEnum {
    AwswafRegional20161128GetSqlInjectionMatchSet = "AWSWAF_Regional_20161128.GetSqlInjectionMatchSet"
}
export declare class GetSqlInjectionMatchSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSqlInjectionMatchSetXAmzTargetEnum;
}
export declare class GetSqlInjectionMatchSetRequest extends SpeakeasyBase {
    headers: GetSqlInjectionMatchSetHeaders;
    request: shared.GetSqlInjectionMatchSetRequest;
}
export declare class GetSqlInjectionMatchSetResponse extends SpeakeasyBase {
    contentType: string;
    getSqlInjectionMatchSetResponse?: shared.GetSqlInjectionMatchSetResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
